// simple.js
//Variables controladores
let counter = 1;
const minValue = 1;
const maxValue = 6;

const PDFStart = nameRoute => {
    let loadingTask = pdfjsLib.getDocument(nameRoute),
        pdfDoc = null,
        canvas = document.querySelector('#renderPDF'),
        ctx = canvas.getContext('2d'),
        scale = 2.5,
        numPage = 1;

        loadingTask.promise.then(pdfDoc_ => {
            pdfDoc = pdfDoc_;
            GeneratePDF(numPage)
        });

    const GeneratePDF = numPage => {
        pdfDoc.getPage(numPage).then(page => {
        let viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
        canvasContext : ctx,
        viewport:  viewport
        }
            page.render(renderContext);
        })
        //document.querySelector('#npages').innerHTML = numPage;
    } 
    
    //Zoom PDF
    //Zoom In
    const zoominbutton = document.getElementById("zoominbutton");
    zoominbutton.onclick = function() {
        //console.log('Zoom In');
        if(counter < maxValue){
            counter++;
            canvas.style.transform = (`scale(${counter})`);
        }
        adjustButtons();
        //console.log(counter);
    }
    
    //Zoom Out
    const zoomoutbutton = document.getElementById("zoomoutbutton");
    zoomoutbutton.onclick = function() {
        //console.log('Zoom Out')
        if(counter > minValue){
            counter--;
            canvas.style.transform = (`scale(${counter})`);
        }
        adjustButtons();
        //console.log(counter);
    }
    
    const adjustButtons = () =>{
        //Disabled opacity
        counter === maxValue ? zoominbutton.style.opacity = ('50%') : zoominbutton.style.opacity = ('100%');
        counter === maxValue ? zoominbutton.style.cursor = ('default') : zoominbutton.style.cursor = ('pointer');
        
        //Disabled cursor
        counter === minValue ? zoomoutbutton.style.opacity = ('50%') : zoomoutbutton.style.opacity = ('100%');
        counter === minValue ? zoomoutbutton.style.cursor = ('default') : zoomoutbutton.style.cursor = ('pointer');
        canvasContainer.style.width = ('auto');
        setTimeout(function(){
            canvasContainer.style.width = ('100%');
            //console.log('Fixed');
        }, 250);
    }

    zoomoutbutton.style.opacity = ('50%');
    zoomoutbutton.style.cursor = ('default');

}

const startPdf = () => {
    PDFStart(source);
}

window.addEventListener('load', startPdf);