/**
 * c0nsole 0.0.1
 *
 * A plugin for CSSS that implements a heads up display console.
 *
 * Usage:
 * c0nsole.open() - opens the console
 * c0nsole.close() - closes it
 * c0nsole.clear() - clears the console
 * c0nsole.write(str) - prints the string on the console; opening it, if required
 *
 * During the presentation you can hide the console by
 * double-clicking it.
 * 
 * by marcoos
*/

(function () {
    var self = window.c0nsole = {
        isOpen: false,
        isSetup: false,
        element: null,
        
        open: function () {
            var element;
            
            if (!this.isSetup) {
                element = document.createElement("pre");
                element.spellcheck = false;
                element.className = "c0nsole-pre c0nsole-pre-hidden";
                element.ondblclick = this.close.bind(this);
                this.element = element;
                this.isSetup = true;
            }
            
            if (!this.isOpen) {
                document.body.appendChild(this.element);
                setTimeout(function () {
                    this.element.classList.remove("c0nsole-pre-hidden");
                }.bind(this), 100);
                
            }
        },
        
        clear: function () {
            this.element.innerHTML = "";
        },
        
        close: function () {
            var that = this;
            that.element.classList.add("c0nsole-pre-hidden");
           
            setTimeout(function () {
                this.element.parentNode.removeChild(that.element);
                this.clear();
            }.bind(this), 600);
            
        },
        
        write: function (text) {
            if (!this.isOpen) {
                this.open();
            }
            
            this.element.appendChild(document.createTextNode(String(text) + "\n"));
        }
    }
}());