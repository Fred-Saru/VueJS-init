new Vue({
    el: '#exercise',
    data: {
        isHighlight: true,
        custom: 'small',
        isActive: false,
        colorName: 'yellow',
        loaderWidth: 0
    },
    methods: {
      startEffect: function() {
        this.isHighlight = !this.isHighlight;
        console.log(this.isHighlight);
      },
      startProgress: function() {
        setInterval(() => {
            this.loaderWidth += 10;
        }, 1000);
      }
    },
    computed: {
        isActive: function() {
            return this.isActive === 'true' ? true : false;
        },
        firstStyle: function() {
            return {
                highlight: this.isHighlight,
                shrink: !this.isHighlight
            };
        },
        customClass: function() {
            return `{${this.custom}: ${this.isActive}}`
        },
        loaderWidthPx: function() {
           return this.loaderWidth + 'px';
        }
    }
  });