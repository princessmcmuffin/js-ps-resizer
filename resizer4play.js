#target photoshop

	var doc = app.activeDocument;

main();
function main(){
while (documents.length > 0) {

	ResizeFunction();
	}
}



function ResizeFunction(){
    var doc = app.activeDocument;
    if(!documents.length) return;
    app.preferences.rulerUnits = Units.PIXELS;
var startRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var Name = doc.name.replace(/\.[^\.]+$/, '');
var Path = decodeURI(doc.path);


doc.changeMode(ChangeMode.RGB);

constrainProportions = true;



//IF IT'S TALLER THAN IT IS WIDE
if (doc.height > doc.width) {
   
    var difference = doc.height-doc.width;
    
//FOR TOP PIC
    doc.resizeCanvas(doc.width,doc.width,AnchorPosition.TOPCENTER);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_TOP.jpg");(+".psd")
SaveJPEG(saveFile,12);

//FOR TOP PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_TOP_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);

//RESTORE
doc.activeHistoryState = doc.historyStates[doc.historyStates.length-3];  

//FOR MIDDLE PIC
    doc.resizeCanvas(doc.width,doc.width,AnchorPosition.MIDDLECENTER);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_MIDDLE.jpg");
SaveJPEG(saveFile,12);

//FOR MIDDLE PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_MIDDLE_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);

//RESTORE
doc.activeHistoryState = doc.historyStates[doc.historyStates.length-3];  
 
//FOR BOTTOM PIC
    doc.resizeCanvas(doc.width,doc.width,AnchorPosition.BOTTOMCENTER);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_BOTTOM.jpg");
SaveJPEG(saveFile,12);

//FOR MIDDLE PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_BOTTOM_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);

}


//IF IT'S WIDER THAN IT IS TALL
if (doc.height < doc.width) {
   
    var difference = doc.width-doc.height;
    
//FOR LEFT PIC
    doc.resizeCanvas(doc.height,doc.height,AnchorPosition.MIDDLELEFT);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_LEFT.jpg");(+".psd")
SaveJPEG(saveFile,12);

//FOR LEFT PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_LEFT_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);

//RESTORE
doc.activeHistoryState = doc.historyStates[doc.historyStates.length-3];  
    
//FOR MIDDLE PIC
    doc.resizeCanvas(doc.height,doc.height,AnchorPosition.MIDDLECENTER);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_MIDDLE.jpg");
SaveJPEG(saveFile,12);

//FOR MIDDLE PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_MIDDLE_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);

//RESTORE
doc.activeHistoryState = doc.historyStates[doc.historyStates.length-3];  
 
//FOR RIGHT PIC
    doc.resizeCanvas(doc.height,doc.height,AnchorPosition.MIDDLERIGHT);

var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_RIGHT.jpg");(+".psd")
SaveJPEG(saveFile,12);

//FOR RIGHT PIC THUMBNAIL
doc.resizeImage(200,200,null,null)
var outFolder = Folder(Path+"/Resized Images");
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+"_RIGHT_THUMBNAIL.jpg");
SaveJPEG(saveFile,12);
}
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
app.preferences.rulerUnits = startRulerUnits;

if (documents.length > 0) {
	
var doc = app.activeDocument;
}

}




function SaveJPEG(saveFile, jpegQuality){
jpgSaveOptions = new ExportOptionsSaveForWeb();
jpgSaveOptions.format = SaveDocumentType.JPEG;
jpgSaveOptions.quality = 60;

activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, jpgSaveOptions);


}

function SaveJPEGold(saveFile, jpegQuality){
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = jpegQuality; //1-12
activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);
}

function createNamedSnapshot(name) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putClass( charIDToTypeID('SnpS') );
    desc.putReference( charIDToTypeID('null'), ref );
        var ref1 = new ActionReference();
        ref1.putProperty( charIDToTypeID('HstS'), charIDToTypeID('CrnH') );
    desc.putReference( charIDToTypeID('From'), ref1 );
    desc.putString( charIDToTypeID('Nm  '), name );
    desc.putEnumerated( charIDToTypeID('Usng'), charIDToTypeID('HstS'), charIDToTypeID('FllD') );
    executeAction( charIDToTypeID('Mk  '), desc, DialogModes.NO );
}

function revertNamedSnapshot(name) {
    var desc = new ActionDescriptor();
        var ref = new ActionReference();
        ref.putName( charIDToTypeID('SnpS'), name );
    desc.putReference( charIDToTypeID('null'), ref );
    executeAction( charIDToTypeID('slct'), desc, DialogModes.NO );
}