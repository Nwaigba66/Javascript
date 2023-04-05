console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
    // what goes here?
    // don't forget to return the escaped string!
    function html(pieces, ...substitutions) {
        var result = pieces[0];
        for (var i = 0; i < substitutions.length; ++i) {
            result += escape(substitutions[i]) + pieces[i + 1];
        }
    
        return result;
    }

function escape(raw) {
    return raw.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
};
