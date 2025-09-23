

const ElementMatcher = {

    
    BaselineElementScreenShot(PageName, ElementName, ElementHandle) {
        let ImageName = PageName+'-'+ElementName+'.png';
        let DirName = 'snapshots/'+PageName+'.spec.js';
        let Path = DirName+'/'+ImageName;
        ElementHandle.screenshot({path:Path });
                
    },

    GetElementBaseShotName(PageName, ElementName){
        let ImageName = PageName+'-'+ElementName+'.png';
        return ImageName;
    },

    TestElement(ElementHandle){
        return ElementHandle.screenshot();
    }

    }

    export default ElementMatcher; 

