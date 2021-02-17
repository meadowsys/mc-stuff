// @ts-check

// node .github/buildmod <repo> <path>
// repo: for example "minelittlepony/minelittlepony"
// path to clone to relative to process.cwd(), example "minelittlepony"

const { spawn } = require("child_process");
const path = require("path");
const os = require("os");
const fs = require("fs");

/**
 * @param {string | Array<string>} cmd command to run
 * @param {string} cwd working dir in which to run the cmd in, relative to process.cwd()
 * @return {Promise<void>}
 */
const runcmd = (cmd, cwd) => {
   cwd = path.resolve(process.cwd(), cwd);
   const arraycmd = !Array.isArray(cmd) ? (cmd = [cmd]) : cmd;

   return new Promise((res, rej) => {
      let promise = Promise.resolve();

      arraycmd.forEach(currentcmd => promise = promise.then(() => new Promise((res, rej) => {
         console.log(`running command "${currentcmd}"`);
         const args = currentcmd.split(/ +/g);
         const spawned = spawn(args.shift(), args, {
            stdio: "inherit",
            cwd,
            env: process.env
         });

         spawned.on("close", code => code === 0 ? res() : (process.exitCode = code) && rej(code));
      })));

      promise.then(res).catch(rej);
   });
};

function printborder() {
   console.log("-".repeat(Math.min(32, process.stdout.columns - 2)));
   console.log();
}

(async () => {
   // thee main method lol
   // async because i can await and thats cool

   // initial setup and things
   // ensure linux
   if (os.platform() != "linux") throw "os isn't linux, might not work";
   // ensure right amount of args
   if (process.argv.length !== 2 + 2) throw "args not right";
   const [repo, repolocaldir] = process.argv.slice(2);
   // ensure target dir is either not present or empty
   const fullpath = path.resolve(process.cwd(), repolocaldir);
   if (
      fs.existsSync(fullpath)
         // exists, check its a dir and is empty
         && (fs.statSync(fullpath).isDirectory() && fs.readdirSync(fullpath).length === 0)
   ) throw "path either is a file or a non-empty dir";

   // clone repo
   await runcmd(`git clone https://github.com/${repo} ${repolocaldir}`, ".");
   printborder();

   // run build
   console.log("running build...");
   await runcmd(`sudo chmod +x gradlew`, repolocaldir);
   await runcmd(`./gradlew build`, repolocaldir);
   printborder();

   // determine good output file
   let files = fs.readdirSync(path.resolve(fullpath, "./build/libs"));
   console.log(`found "${files.join("\", \"")}"`);
      files = files.filter(val => !val.toLowerCase().includes("dev"))
                   .filter(val => !val.toLowerCase().includes("sources"));
   console.log(`but keeping only "${files.join("\", \"")}"`);

   // move mod to out dir
   const destdir = path.resolve(process.cwd(), "mods");
   console.log(`putting the mods inside ${destdir}`);
   if (fs.existsSync(destdir)
      // exists, check its a dir and is empty
      && fs.statSync(destdir).isFile()
   ) throw "mods is already a file, needs to be a dir or nonexistent";
   if (!fs.existsSync(destdir)) fs.mkdirSync(destdir, { recursive: true });

   files.forEach(file => {
      let destfile = path.resolve(destdir, file);
      file = path.resolve(fullpath, "./build/libs", file);

      // do a weird hoogly thing if it already exists, so that its still copied over
      // name-1.ext name-2.ext etc
      if (fs.existsSync(destfile)) {
         let lastindex = destfile.lastIndexOf(".");
         let [seg1, seg2] = lastindex === -1
            ? [destfile, ""]
            : [destfile.substring(0, lastindex), destfile.substring(lastindex)];
         let i = 1;
         destfile = seg1 + `-${i}` + seg2;
         while (fs.existsSync(destfile)) void i++ || (destfile = seg1 + `-${i}` + seg2);
      }
      fs.renameSync(file, destfile);
      console.log(`mod put at ${destfile}`);
   });
})().catch(err => {
   console.error(typeof err === "number" ? `command exited with ${err}` : err);
   process.exitCode = 1;
});
