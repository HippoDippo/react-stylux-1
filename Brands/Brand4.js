'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RectangleImage = require('../Images/RectangleImage');

var _RectangleImage2 = _interopRequireDefault(_RectangleImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand4 = function (_Component) {
    _inherits(Brand4, _Component);

    function Brand4(props) {
        _classCallCheck(this, Brand4);

        var _this = _possibleConstructorReturn(this, (Brand4.__proto__ || Object.getPrototypeOf(Brand4)).call(this, props));

        _this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
        };
        return _this;
    }

    _createClass(Brand4, [{
        key: 'render',
        value: function render() {
            var BRAND = {
                display: 'flex',
                alignItems: 'center'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'section',
                { style: BRAND },
                _react2.default.createElement(
                    'a',
                    { href: this.state.link },
                    _react2.default.createElement(
                        _RectangleImage2.default,
                        null,
                        CHILDS[0],
                        'logo'
                    )
                )
            );
        }
    }]);

    return Brand4;
}(_react.Component);

exports.default = Brand4;