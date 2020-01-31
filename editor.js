var vm = this;

            /*Region Fields*/
            vm.editor = "";

            /*Region Methods*/
            vm.desfazer = desfazer;
            vm.refazer = refazer;
            vm.negrito = negrito;
            vm.italico = italico;
            vm.sublinhado = sublinhado;
            vm.alinharEsquerda = alinharEsquerda;
            vm.justificado = justificado;
            vm.centralizado = centralizado;
            vm.alinharDireita = alinharDireita;


            //function Iniciar() {
            //    editor.document.designMode = 'On';
            //}

            function desfazer() {
                return document.execCommand('undo', false, vm.editor);
            }

            function refazer() {
                return document.execCommand('redo', false, vm.editor);
            }

            function negrito() {
                debugger
                var texto = vm.editor;
                var resultado = texto.bold();
                return resultado;
            }

            function italico() {
                return document.execCommand('italic', false, vm.editor);
            }

            function sublinhado() {
                return document.execCommand('underline', false, vm.editor);
            }

            function alinharEsquerda() {
                return document.execCommand('justifyleft', false, vm.editor);
            }

            function centralizado() {
                return document.execCommand('justifycenter', false, vm.editor);
            }

            function justificado() {
                return document.execCommand('justifyfull', false, vm.editor);
            }

            function alinharDireita() {
                return document.execCommand('justifyright', false, vm.editor);
            }

            function tamanho(tamanho) {
                if (tamanho != '')
                    editor.document.execCommand('fontsize', false, tamanho);
            }