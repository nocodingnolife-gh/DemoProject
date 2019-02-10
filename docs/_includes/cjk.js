$(function fixCjkSpacing() {
    var selector = '{{ include.selector }}';

    // Halfwidth and Fullwidth Forms    FF00–FFEF
    // CJK Symbols and Punctuation      3000–303F
    // CJK Unified Ideographs           4E00-9FFF
    var cjkRegex = /([\uFF00-\uFFEF]|[\u3000-\u303F]|[\u4E00-\u9FFF])(\r|\r?\n)(?!$)/g;

    $(selector).find('p, li').each(function() {
        var $t = $(this);
        $t.html($t.html().replace(cjkRegex, '$1'));
    });
});
