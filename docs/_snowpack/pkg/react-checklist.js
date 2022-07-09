import { r as react } from './common/index-ae389540.js';

/**
 *
 * @param data item list for check. https://github.com/gtgalone/react-checklist#data
 * @param options option for check. https://github.com/gtgalone/react-checklist#options
 * @returns return properties. https://github.com/gtgalone/react-checklist#return
 */
var useChecklist = function (data, options) {
    if (options === void 0) { options = { key: 'id', keyType: 'string' }; }
    var _a = react.useState(new Set()), checkedItems = _a[0], setCheckedItems = _a[1];
    if (!(data instanceof Array)) {
        data = [];
    }
    if (options === null) {
        options = {};
    }
    if (!options.key) {
        options.key = 'id';
    }
    if (!options.keyType) {
        options.keyType = 'string';
    }
    return {
        isCheckedAll: (data.length === 0) ? false : (checkedItems.size === data.length),
        checkedItems: checkedItems,
        setCheckedItems: setCheckedItems,
        handleCheck: function (e) {
            e.stopPropagation();
            var key = e.currentTarget.dataset.key;
            if (key) {
                if (options.keyType === 'number') {
                    key = parseInt(key, 10);
                }
                if (checkedItems.has(key)) {
                    checkedItems.delete(key);
                }
                else {
                    checkedItems.add(key);
                }
                return setCheckedItems(new Set(checkedItems));
            }
            if (checkedItems.size === data.length) {
                return setCheckedItems(new Set());
            }
            setCheckedItems(new Set(data.map(function (v) { return v[options.key]; })));
        },
    };
};

export { useChecklist };
