import fs from "fs";
import path from "path";

let DirCleaner = {

async CleanDir(DirPath){

        const DirToClean = path.resolve(DirPath);
        
        if (fs.existsSync(DirToClean)) {
            fs.rmSync(DirToClean, { recursive: true, force: true });
            console.log(`Directory ${DirToClean} has been deleted.`);
        } else {
            console.log(`Directory ${DirToClean} does not exist.`);

            }       

    }
}

export default DirCleaner;