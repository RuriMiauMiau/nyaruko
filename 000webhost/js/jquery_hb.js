
// Initialization
$.auto = {
	init: function() {
		for (module in $.auto) {
			if ($.auto[module].init)
				$.auto[module].init();
		}
	}
};
$(document).ready($.auto.init);


//基本のロールオーバー
$.auto.hover = {
	init: function() {
		$('IMG.Hover')
			.bind('mouseover', this.enter)
			.bind('mouseout', this.exit)
			.each(this.preload);
	},
	preload: function() {
		this.preloaded = new Image;
		this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_over$2");
	},
	enter: function() {
		this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_over$2");
	},
	exit: function() {
		this.src = this.src.replace(/^(.+)_over(\.[a-z]+)$/, "$1$2");
	}
};
