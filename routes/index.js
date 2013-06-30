exports.index = function(req, res) {
    res.locals = {
        title: 'Example application'
    };

    return res.render(
        'index',
        {
            partials:
            {
                part: 'partials/part'
            }
        }
    );
};