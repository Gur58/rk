(function () {

    function NewsWidget() {
        this.jsonString = '{"0":{"target":"news","section":"card","description":"01.07.2019 Новая платежная система\\nДля клиентов нашего банка доступна новая платежная система\\n«Ромашка». Через данную платежную систему клиенты могут\\nвносить средства на кредит без комиссии. Для осуществления\\nоплаты клиентам необходимо иметь при себе номер договора и\\nпаспорт.\\nБолее подробная информация размещена в инструкции","url":"http://img1.joyreactor.cc/pics/post/%D0%BA%D0%BE%D0%BC%D0%B8%D0%BA%D1%81-%D1%88%D0%BA%D1%8F-%D1%8E%D0%BC%D0%BE%D1%80-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-3200131.jpeg"},"1":{"target":"news","section":"credit","description":"01.07.2019 Новая платежная система\\nДля клиентов нашего банка доступна новая платежная система\\n«Ромашка». Через данную платежную систему клиенты могут\\nвносить средства на кредит без комиссии. Для осуществления\\nоплаты клиентам необходимо иметь при себе номер договора и\\nпаспорт.\\nБолее подробная информация размещена в инструкции","url":"http://img0.joyreactor.cc/pics/post/%D0%BA%D0%BE%D0%BC%D0%B8%D0%BA%D1%81-%D1%88%D0%BA%D1%8F-%D1%8E%D0%BC%D0%BE%D1%80-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-3200132.jpeg"},"2":{"target":"news","section":"contribution","description":"01.07.2019 Новая платежная система\\nДля клиентов нашего банка доступна новая платежная система\\n«Ромашка». Через данную платежную систему клиенты могут\\nвносить средства на кредит без комиссии. Для осуществления\\nоплаты клиентам необходимо иметь при себе номер договора и\\nпаспорт.\\nБолее подробная информация размещена в инструкции","url":"http://img1.joyreactor.cc/pics/post/%D0%BA%D0%BE%D0%BC%D0%B8%D0%BA%D1%81-%D1%88%D0%BA%D1%8F-%D1%8E%D0%BC%D0%BE%D1%80-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-3200133.jpeg"},"3":{"target":"news","section":"sale","description":"01.07.2019 Новая платежная система\\nДля клиентов нашего банка доступна новая платежная система\\n«Ромашка». Через данную платежную систему клиенты могут\\nвносить средства на кредит без комиссии. Для осуществления\\nоплаты клиентам необходимо иметь при себе номер договора и\\nпаспорт.\\nБолее подробная информация размещена в инструкции","url":"http://img1.joyreactor.cc/pics/post/%D0%BA%D0%BE%D0%BC%D0%B8%D0%BA%D1%81-%D1%88%D0%BA%D1%8F-%D1%8E%D0%BC%D0%BE%D1%80-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-3200133.jpeg"}}';
        this.currentCategory='all';
        this.obj=null;
        this.category = {
            credit: 'Консультации по кредитам',
            card: 'Консультации по картам',
            contribution: 'Консультации по вкладам',
            sale: 'Продажа кредитов наличными и кредитных карт'
        };
        this.newsRange = [0, 0];
        this.news = null;
        this.getData = function () {
            var obj = JSON.parse(this.jsonString);
            this.obj=obj
            this.addWidget();
        };


        this.addWidget = function () {

            for (var i in this.obj) {
                var el = this.obj[i];
                if(this.currentCategory=='all'){
                    $('#news').append('<div class="panel panel-info widgetNews">' +
                        '<div class="panel-heading"><h4>' + this.category[el.section] + '</h4></div>' +
                        '<div class="panel-body">' +
                        '<p class="description">' + el.description + '</p>' +
                        '<a href="' + el.url + '">Ссылка на инструкцию</a> ' +
                        '</div></div>');
                }
                else if(this.currentCategory==el.section){
                    $('#news').append('<div class="panel panel-info widgetNews">' +
                        '<div class="panel-heading"><h4>' + this.category[el.section] + '</h4></div>' +
                        '<div class="panel-body">' +
                        '<p class="description">' + el.description + '</p>' +
                        '<a href="' + el.url + '">Ссылка на инструкцию</a> ' +
                        '</div></div>');
                }

            };

        };

        this.nextGruop = function () {
            if (this.news[this.newsRange[1] + 1] !== undefined) {
                this.news.hide();
                this.newsRange[0] = this.newsRange[1] + 1;
                for (var i = 1; i <= 3; i++) {
                    if (this.news[this.newsRange[1] + 1] !== undefined) {
                        this.newsRange[1] += 1;
                        console.log(this.newsRange[1]);
                        $(this.news[this.newsRange[1]]).show();
                    }
                    else {
                        break;
                    }
                }
            }
        };

        this.prevGruop = function () {
            if (this.news[this.newsRange[0] - 1] !== undefined) {
                this.news.hide();
                this.newsRange[1] = this.newsRange[0]-1;
                for (var i = 1; i <= 3; i++) {
                    if (this.news[this.newsRange[0] - 1] !== undefined) {
                        this.newsRange[0] -= 1;
                        $(this.news[this.newsRange[0]]).show();

                    }
                    else {
                        break;
                    }
                }
            }
        };

        this.showGruop = function () {

            this.news = $('#news').children();
            if (this.news !== undefined) {
                this.newsRange[0] = 0;
                for (var i = 0; i < 3; i++) {
                    if (this.news[i] !== undefined) {
                        $(this.news[i]).show()
                        this.newsRange[1] = i;
                    }
                    else {
                        break;
                    }
                }
            }
        }

    };

    function listeners() {

        $('#prevNews').click(function () {
            newsWidget.prevGruop();
        });
        $('#nextNews').click(function () {
            newsWidget.nextGruop()
        });

        $('#header-news').children().click(function (event) {
            newsWidget.currentCategory=event.target.value;
            newsWidget.news.remove();
            newsWidget.addWidget();
            newsWidget.showGruop();
        });

    };

    var newsWidget = '';
    $(document).ready(function () {
        newsWidget = new NewsWidget();
        newsWidget.getData();
        newsWidget.showGruop();
        listeners();

    });


}());
