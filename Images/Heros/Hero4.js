'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Holder = require('../../Holders/Holder1');

var _Holder2 = _interopRequireDefault(_Holder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero4 = function (_Component) {
    _inherits(Hero4, _Component);

    function Hero4(props) {
        _classCallCheck(this, Hero4);

        var _this = _possibleConstructorReturn(this, (Hero4.__proto__ || Object.getPrototypeOf(Hero4)).call(this, props));

        _this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(Hero4, [{
        key: 'render',
        value: function render() {
            var HEROSTYLE = {
                background: this.state.background,
                backgroundImage: this.state.backgroundImage,
                backgroundRepeat: this.state.backgroundRepeat,
                backgroundPosition: this.state.backgroundPosition,
                backgroundSize: this.state.backgroundSize,
                width: this.state.width,
                height: this.state.height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'div',
                { style: HEROSTYLE, id: this.state.id, className: this.state.className },
                _react2.default.createElement(
                    _Holder2.default,
                    null,
                    CHILDS[2],
                    CHILDS[0]
                )
            );
        }
    }]);

    return Hero4;
}(_react.Component);

exports.default = Hero4;