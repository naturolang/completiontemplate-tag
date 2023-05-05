"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.completiontemplate = void 0;
const completion_tag_1 = require("completion-tag");
function completiontemplate(literals, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof literals === 'string') {
            literals = [literals];
        }
        return (yield Promise.all(args.map((arg, i) => __awaiter(this, void 0, void 0, function* () { return ([i, ((arg && arg.kind === 'Document') ? yield (0, completion_tag_1.completion) `${arg.loc.source.body}` : yield (0, completion_tag_1.completion) `${arg}`) + literals[i + 1]]); })))).sort((a, b) => a[0] - b[0]).reduce((pv, cv) => [...pv, cv[1]], [literals[0]]).join('');
    });
}
exports.completiontemplate = completiontemplate;
