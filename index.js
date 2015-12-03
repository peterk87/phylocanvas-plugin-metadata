!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("PhyloCanvas"));else if("function"==typeof define&&define.amd)define(["PhyloCanvas"],e);else{var a=e("object"==typeof exports?require("PhyloCanvas"):t.PhyloCanvas);for(var r in a)("object"==typeof exports?exports:t)[r]=a[r]}}(this,function(t){return function(t){function e(r){if(a[r])return a[r].exports;var s=a[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function s(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function i(t){t(h["default"],"createTree",function(t,e){var a=t.apply(void 0,s(e));return a.showMetadata=!1,a.selectedMetadataColumns=[],a.metadataXStep=15,a.metadataHeadingDrawn=!1,a.colour1="rgba(206,16,16,1)",a.colour0="#ccc",a}),t(n.Tree,"draw",function(t,e){t.apply(this,e),this.metadataHeadingDrawn=!1}),t(n.Branch,"drawLeaf",function(t){t.call(this),this.tree.showMetadata&&this.drawMetadata()}),t(n.Branch,"getTotalSize",function(t){var e=t.call(this);return this.tree.showMetadata&&(e+=this.tree.getMetadataColumnHeadings().length*this.tree.metadataXStep),e})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var n=a(1),h=r(n);n.Tree.prototype.viewMetadataColumns=function(){var t=arguments.length<=0||void 0===arguments[0]?this.getMetadataColumnHeadings():arguments[0];this.showMetadata=!0,this.selectedMetadataColumns=t,this.fitInPanel(),this.draw()},n.Tree.prototype.getMetadataColumnHeadings=function(){for(var t=[],e=0;e<this.leaves.length;e++)if(Object.keys(this.leaves[e].data).length>0){t=Object.keys(this.leaves[e].data);break}return t},n.Tree.prototype.clearMetadata=function(){for(var t=0;t<this.leaves.length;t++)Object.keys(this.leaves[t].data).length>0&&(this.leaves[t].data={})},n.Branch.prototype.drawMetadata=function(){var t=0;(this.tree.showLabels||this.tree.hoverLabel&&this.highlighted)&&(t=this.tree.maxLabelLength[this.tree.treeType]);var e,a,r=this.getLabelStartX()+t,s=0,i=[],n=this.tree.textSize,h=this.tree.metadataXStep/2;this.tree.alignLabels&&("rectangular"===this.tree.treeType?r+=this.tree.farthestNodeFromRootX-this.centerx:"hierarchical"===this.tree.treeType&&(r+=this.tree.farthestNodeFromRootY-this.centery)),!this.tree.metadataHeadingDrawn&&this.tree.alignLabels&&"circular"!==this.tree.treeType&&"radial"!==this.tree.treeType&&(this.drawMetadataHeading(r,s),this.tree.metadataHeadingDrawn=!0);var o=this.tree.metadataXStep;if(Object.keys(this.data).length>0){for(this.canvas.beginPath(),i=this.tree.selectedMetadataColumns.length>0?this.tree.selectedMetadataColumns:Object.keys(this.data),s-=n/2,e=0;e<i.length;e++)a=i[e],r+=o,window.parseInt(this.data[a])?(this.canvas.fillStyle=this.tree.colour1,this.canvas.fillRect(r,s,h,n)):0===window.parseInt(this.data[a])&&(this.canvas.fillStyle=this.tree.colour0,this.canvas.fillRect(r,s,h,n));this.canvas.stroke(),this.canvas.closePath()}},n.Branch.prototype.drawMetadataHeading=function(t,e){var a,r,s;for(a=this.tree.selectedMetadataColumns.length>0?this.tree.selectedMetadataColumns:Object.keys(this.data),this.canvas.font="12px Sans-serif",this.canvas.fillStyle="black",s=0;s<a.length;s++)r=a[s],t+=this.tree.metadataXStep,this.canvas.rotate(-Math.PI/2),"rectangular"===this.tree.treeType?(this.canvas.textAlign="left",this.canvas.fillText(r,20,t+6)):"hierarchical"===this.tree.treeType?(this.canvas.textAlign="right",this.canvas.fillText(r,-20,t+8)):"diagonal"===this.tree.treeType&&(this.canvas.textAlign="left",this.canvas.fillText(r,20,t+6)),this.canvas.rotate(Math.PI/2)},t.exports=e["default"]},function(e,a){e.exports=t}])});