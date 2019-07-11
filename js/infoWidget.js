(function () {

    function InfoWidget() {
        this.interval = null;
        this.idWidget = null;
        this.info = null;
        this.lenghtInfo = null;
        this.jsonString = '{"0":{"target":"info","description":"С 01.07.2019 клиентам доступна новая платежная система\\n«Ромашка»","photoUrl":"https://s13.stc.all.kpcdn.net/share/i/12/10766350/inx960x640.jpg"},"1":{"target":"info","description":"С 10.07.2019 перестает работать платежная система\\n«Подорожник»","photoUrl":"http://yoga-soul.ru/upload/resize_cache/iblock/d4d/500_300_0/d4d62ed48e33e59a933256fa95caab7e.jpg"},"2":{"target":"info","description":"С 02.07.2019 клиентам доступна новая платежная система\\n«Ромашка»","photoUrl":"https://s13.stc.all.kpcdn.net/share/i/12/10766350/inx960x640.jpg"}}';
            this.getData = function () {
                var obj = JSON.parse(this.jsonString);
                this.addWidget(obj);
            };

        this.addWidget = function (obj) {
            for (var i in obj) {
                var el = obj[i];
                $('#info').append('<div class="panel panel-danger widgetInfo">' +
                    '<div class="panel-heading"><h4>Важная информация</h4></div>' +
                    '<div class="panel-body">' +
                    '<img src=' + el.photoUrl + '>' +
                    '<p class="description">' + el.description + '</p>' +
                    '</div></div>');
            };
            var info = $('#info').children();
            $(info[0]).show();
            this.info = info;
            this.runSlider();
        };
        this.runSlider = function () {
            var children = this.info;
            var currentWidget = $('.widgetInfo[style*="display: block"]')[0];
            this.lenghtInfo = children.length - 1;

            for (var id in children) {
                if (children[id] == currentWidget) {
                    this.idWidget = id;
                }
            }
            var self = this;
            this.interval = setInterval(function () {
                if (self.idWidget != self.lenghtInfo) {
                    $(children[self.idWidget]).slideUp(500);
                    self.idWidget++;
                    $(children[self.idWidget]).slideDown(1500);
                }
                else {
                    $(children[self.idWidget]).slideUp(500);
                    self.idWidget = 0;
                    $(children[self.idWidget]).slideDown(1500);
                }

            }, 10000, self)
        };
        this.stopSlider = function () {
            clearTimeout(this.interval)
        };
        this.nextSlide = function () {
            this.stopSlider();
            if (this.idWidget != this.lenghtInfo) {
                $(this.info[this.idWidget]).slideUp(500);
                this.idWidget++;
                $(this.info[this.idWidget]).slideDown(1500);
            }
            else {
                $(this.info[this.idWidget]).slideUp(500);
                this.idWidget = 0;
                $(this.info[this.idWidget]).slideDown(1500);
            }
            this.runSlider();
        };
        this.prevSlide = function () {
            this.stopSlider();
            if (this.idWidget == 0) {
                $(this.info[this.idWidget]).slideUp(500);
                this.idWidget++;
                $(this.info[this.lenghtInfo]).slideDown(1500);
            }
            else {
                $(this.info[this.idWidget]).slideUp(500);
                this.idWidget--;
                $(this.info[this.idWidget]).slideDown(1500);
            }
            this.runSlider();
        };

    };

    function listeners() {
        $('#info').mouseover(function () {
            infoWidget.stopSlider();
        });

        $('#info').mouseout(function () {
            infoWidget.runSlider();
        });

        $('#prevInfo').click(function () {
            infoWidget.prevSlide();
        });

        $('#nextInfo').click(function () {
            infoWidget.nextSlide();
        });
    };

    var infoWidget = '';
    $(document).ready(function () {
        infoWidget = new InfoWidget();
        infoWidget.getData();
        listeners();
    });


}());
