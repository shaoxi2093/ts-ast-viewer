export default {
    fileName: `/lib.scripthost.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface ActiveXObject{new (s:string):any;}declare var ActiveXObject:ActiveXObject;interface ITextWriter{Write(s:string):void ;WriteLine(s:string):void ;Close():void ;}interface TextStreamBase{/**
};