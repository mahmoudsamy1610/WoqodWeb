import fs from "fs";
import path from "path";


function CleanDir(){

        const DirToClean = path.resolve('./snapshots');
        
        if (fs.existsSync(DirToClean)) {
            fs.rmSync(DirToClean , { recursive: true, force: true });
            console.log(`Directory ${DirToClean} has been deleted.`);
        } else {
            console.log(`Directory ${DirToClean} does not exist.`);

            }       

    }

CleanDir();