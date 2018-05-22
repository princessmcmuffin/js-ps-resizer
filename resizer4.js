#target photoshop

	

//var w =new Window("dialog");
//var e = w.add("edittext",undefined, 0);
//var slider = w.add("slider",undefined, 0, 0, 2);
//slider.onChanging = function() {e.text = slider.value;}
//w.show();

	var doc = app.activeDocument;
	var ModelName = prompt('Enter model number', doc);
var CategoryName = prompt('Enter category', doc);
var Features = prompt('How many feature shots? 0-4?)',doc);

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
if (Features < 1) {
doc.trim(TrimType.TOPLEFT, true, true, true, true);
constrainProportions = true;
//doc.resizeImage(null, 500, null, null);
//doc.resizeCanvas(800,600)

//doc.trim(TrimType.TOPLEFT, true, true, true, true);
//constrainProportions = true;



if (doc.height > doc.width) {
	
	if (doc.height < 600) {
	//do nothing
    // doc.resizeImage(null, 550, null, null);
	} else {
  
            doc.resizeImage(null, 600, null, null);
    }
} else {
    if (doc.width < 800) {
	  //do nothing
      // doc.resizeImage(null, 550, null, null);
	} else {
            doc.resizeImage(800, null, null, null);
     }
 }

if (doc.height > 600) {
      doc.resizeImage(null, 600, null, null)
      }
  
if (doc.width >  800) {
      doc.resizeImage(800, null, null, null);
      } 
  }
doc.resizeCanvas(800,600)


createNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
//doc.resizeImage(800, 600, undefined, ResampleMethod.BICUBICSHARPER);
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var docName = doc.name;
docName = docName.match(/(.*)(\.[^\.]+)/) ? docName = docName.match(/(.*)(\.[^\.]+)/):docName = [docName, docName];
var saveFile = File(outFolder+"//"+docName[1]+".jpg");(+".psd")
SaveJPEG(saveFile,12);

/*revertNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
doc.resizeImage(440, 330, undefined, ResampleMethod.BICUBICSHARPER);
//doc.resizeCanvas(400,330)
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var saveFile = File(outFolder +"/"+CategoryName+"-"+ModelName+"-440x330-"+documents.length+".jpg");
SaveJPEG(saveFile,12);

/*revertNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
doc.resizeImage(440, 330, undefined, ResampleMethod.BICUBICSHARPER);
doc.resizeCanvas(400,330)
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var saveFile = File(outFolder +"/"+CategoryName+"-"+ModelName+"-400x330-"+documents.length+"b.jpg");
SaveJPEG(saveFile,12);
*/
/*
revertNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
doc.resizeImage(300, 225, undefined, ResampleMethod.BICUBICSHARPER);
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var saveFile = File(outFolder +"/"+CategoryName+"-"+ModelName+"-300x225-"+documents.length+".jpg");
SaveJPEG(saveFile,12);
revertNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
doc.resizeImage(180, 135, undefined, ResampleMethod.BICUBICSHARPER);
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var saveFile = File(outFolder +"/"+CategoryName+"-"+ModelName+"-180x135-"+documents.length+".jpg");
SaveJPEG(saveFile,12);
revertNamedSnapshot("Snap 1");
//doc.changeMode(ChangeMode.RGB);
doc.resizeImage(80, 60, undefined, ResampleMethod.BICUBICSHARPER);
var outFolder = Folder(Path+"/"+ModelName);
if(!outFolder.exists) outFolder.create();
var saveFile = File(outFolder +"/"+CategoryName+"-"+ModelName+"-80x60-"+documents.length+".jpg");
SaveJPEG(saveFile,12);
revertNamedSnapshot("Snap 1");
*/
//doc.changeMode(ChangeMode.RGB);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
app.preferences.rulerUnits = startRulerUnits;

if (documents.length > 0) {
	
var doc = app.activeDocument;
}
Features = Features - 1;
}

function SaveJPEG(saveFile, jpegQuality){
jpgSaveOptions = new ExportOptionsSaveForWeb();
jpgSaveOptions.format = SaveDocumentType.JPEG;
jpgSaveOptions.quality = 60;

activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, jpgSaveOptions);

//activeDocument.saveAs(saveFile, jpgSaveOptions, true,Extension.LOWERCASE);
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