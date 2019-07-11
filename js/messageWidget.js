(function () {

    function MessageWidget() {
        this.jsonString = '{"0":{"target":"message","type":"SMS","description":"01.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Смс-сообщение: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"1":{"target":"message","type":"E-mail","description":"02.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Письмо: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"2":{"target":"message","type":"SMS","description":"03.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Смс-сообщение: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"3":{"target":"message","type":"SMS","description":"04.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Смс-сообщение: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"4":{"target":"message","type":"E-mail","description":"05.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Письмо: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"5":{"target":"message","type":"SMS","description":"07.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Смс-сообщение: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"6":{"target":"message","type":"SMS","description":"08.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Смс-сообщение: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."},"7":{"target":"message","type":"E-mail","description":"09.07.2019 Рассылка клиентам о новой платежной системе В связи с запуском новой платежной системы «Ромашка» клиентам направлены смс-сообщения следующего содержания:","message":"Письмо: «Рады сообщить, начиная с июля у Вас появилась возможность оплачивать кредит без комиссии в платежной системе «Ромашка. Более подробную информацию можно узнать на сайте банка»."}}';
        this.obj = null;
        this.messageRange = [0, 0];
        this.message = null;
        this.getData = function () {
            var obj = JSON.parse(this.jsonString);
            this.obj = obj
            this.addWidget();
        };


        this.addWidget = function () {

            for (var i in this.obj) {
                var el = this.obj[i];
                $('#message').append('<div class="panel panel-success widgetMessage">' +
                    '<div class="panel-heading"><h4>' + el.type + '</h4></div>' +
                    '<div class="panel-body">' +
                    '<p class="description">' + el.description + '</p>' +
                    '<p class="message">' + el.message + '</p>' +
                    '</div></div>');
            }
            ;

        };

        this.nextGruop = function () {
            if (this.message[this.messageRange[1] + 1] !== undefined) {
                this.message.hide();
                this.messageRange[0] = this.messageRange[1] + 1;
                for (var i = 1; i <= 3; i++) {
                    if (this.message[this.messageRange[1] + 1] !== undefined) {
                        this.messageRange[1] += 1;
                        $(this.message[this.messageRange[1]]).show();
                    }
                    else {
                        break;
                    }
                }
            }
        };

        this.prevGruop = function () {
            if (this.message[this.messageRange[0] - 1] !== undefined) {
                this.message.hide();
                this.messageRange[1] = this.messageRange[0] - 1;
                for (var i = 1; i <= 3; i++) {
                    if (this.message[this.messageRange[0] - 1] !== undefined) {
                        this.messageRange[0] -= 1;
                        $(this.message[this.messageRange[0]]).show();

                    }
                    else {
                        break;
                    }
                }
            }
        };

        this.showGruop = function () {

            this.message = $('#message').children();
            if (this.message !== undefined) {
                this.messageRange[0] = 0;
                for (var i = 0; i < 3; i++) {
                    if (this.message[i] !== undefined) {
                        $(this.message[i]).show()
                        this.messageRange[1] = i;
                    }
                    else {
                        break;
                    }
                }
            }
        }

    };

    function listeners() {

        $('#prevMessage').click(function () {
            messageWidget.prevGruop();
        });
        $('#nextMessage').click(function () {
            messageWidget.nextGruop()
        });


    };

    var messageWidget = '';
    $(document).ready(function () {
        messageWidget = new MessageWidget();
        messageWidget.getData();
        messageWidget.showGruop();
        listeners();

    });


}());
