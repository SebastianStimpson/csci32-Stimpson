"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
function Card(_a) {
    var className = _a.className, title = _a.title, children = _a.children, href = _a.href;
    return (<a className={className} href={"".concat(href, "?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo\"")} rel="noopener noreferrer" target="_blank">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>);
}
