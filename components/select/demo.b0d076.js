(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{3871:function(x,W,a){x.exports={"automatic-tokenization":a(4549),basic:a(4550),"big-data":a(4551),bordered:a(4552),coordinate:a(4553),"custom-dropdown-menu":a(4554),"custom-tag-render":a(4555),debug:a(4556),"hide-selected":a(4557),"label-in-value":a(4558),multiple:a(4559),optgroup:a(4560),"option-label-prop":a(4561),placement:a(4562),responsive:a(4563),"search-box":a(4564),"search-sort":a(4577),search:a(4578),"select-users":a(4579),size:a(4580),status:a(4581),suffix:a(4582),tags:a(4583)}},4549:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u8BD5\u4E0B\u590D\u5236 ",["code","\u9732\u897F,\u6770\u514B"]," \u5E76\u7C98\u8D34\u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002"]],"en-US":[["p","Try to copy ",["code","Lucy,Jack"]," and paste to the input. Only available in tags and multiple mode."]]},meta:{order:11,title:{"zh-CN":"\u81EA\u52A8\u5206\u8BCD","en-US":"Automatic tokenization"},filename:"components/select/demo/automatic-tokenization.md",id:"components-select-demo-automatic-tokenization"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options<span class="token punctuation">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">10</span><span class="token comment" spellcheck="true">; i &lt; 36; i++) {</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    value<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    mode<span class="token operator">=</span><span class="token string">"tags"</span>
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    onChange<span class="token operator">=</span>{handleChange}
    tokenSeparators<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">','</span><span class="token punctuation">]</span>}
    options<span class="token operator">=</span>{options}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    value<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">tokenSeparators</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">','</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">tokenSeparators</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">','</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(d){return d&&d.__esModule?d:{default:d}}for(var y=[],R=10;R<36;R++)y.push({value:R.toString(36)+R,label:R.toString(36)+R});var w=function(P){console.log("selected ".concat(P))},A=function(){return u.default.createElement(h.Select,{mode:"tags",style:{width:"100%"},onChange:w,tokenSeparators:[","],options:y})},b=A;return N.createElement(b)}}},4550:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u57FA\u672C\u4F7F\u7528\u3002"]],"en-US":[["p","Basic Usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C\u4F7F\u7528","en-US":"Basic Usage"},filename:"components/select/demo/basic.md",id:"components-select-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      onChange<span class="token operator">=</span>{handleChange}
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      disabled
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      loading
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      allowClear
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">loading</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">loading</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(A){return A&&A.__esModule?A:{default:A}}var y=function(b){console.log("selected ".concat(b))},R=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},onChange:y,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",disabled:!0,label:"Disabled"},{value:"Yiminghe",label:"yiminghe"}]}),u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},disabled:!0,options:[{value:"lucy",label:"Lucy"}]}),u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},loading:!0,options:[{value:"lucy",label:"Lucy"}]}),u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},allowClear:!0,options:[{value:"lucy",label:"Lucy"}]}))},w=R;return N.createElement(w)}}},4551:function(x,W,a){x.exports={content:{"zh-CN":[["p","Select \u4F7F\u7528\u4E86",["a",{title:null,href:"https://github.com/react-component/virtual-list"},"\u865A\u62DF\u6EDA\u52A8"],"\u6280\u672F\uFF0C\u56E0\u800C\u83B7\u5F97\u4E86\u6BD4 ",["a",{title:null,href:"https://codesandbox.io/s/beautiful-banzai-m72lv"},"3.0 \u66F4\u597D\u7684\u6027\u80FD"],"\u3002"]],"en-US":[["p","Select use ",["a",{title:null,href:"https://github.com/react-component/virtual-list"},"virtual scroll"]," which get better performance ",["a",{title:null,href:"https://codesandbox.io/s/beautiful-banzai-m72lv"},"than 3.0"],"."]]},meta:{order:25,title:{"zh-CN":"\u5927\u6570\u636E","en-US":"Big Data"},filename:"components/select/demo/big-data.md",id:"components-select-demo-big-data"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Divider<span class="token punctuation">,</span> <span class="token keyword">Select</span><span class="token punctuation">,</span> Typography } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Title } <span class="token operator">=</span> Typography<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options<span class="token punctuation">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; 100000; i++) {</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> \`\${i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>}\${i}\`<span class="token comment" spellcheck="true">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    label<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> i <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Title level<span class="token operator">=</span>{<span class="token number">3</span>}<span class="token operator">></span>Ant Design <span class="token number">4.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
    <span class="token operator">&lt;</span>Title level<span class="token operator">=</span>{<span class="token number">4</span>}<span class="token operator">></span>{options<span class="token punctuation">.</span>length} Items<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span>}
      onChange<span class="token operator">=</span>{handleChange}
      options<span class="token operator">=</span>{options}
    <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span>Divider <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span>Title level<span class="token operator">=</span>{<span class="token number">3</span>}<span class="token operator">></span>Ant Design <span class="token number">3.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
    <span class="token operator">&lt;</span>iframe
      title<span class="token operator">=</span><span class="token string">"Ant Design 3.0 Select demo"</span>
      src<span class="token operator">=</span><span class="token string">"https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&amp;hidenavigation=1&amp;theme=dark&amp;view=preview"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">300</span> }}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Typography <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token operator">=</span> Typography<span class="token punctuation">;</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    label<span class="token operator">:</span> value<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design <span class="token number">4.0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>options<span class="token punctuation">.</span>length<span class="token punctuation">}</span> Items<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design <span class="token number">3.0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ant Design 3.0 Select demo<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&amp;hidenavigation=1&amp;theme=dark&amp;view=preview<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Typography <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token operator">=</span> Typography<span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> i <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design <span class="token number">4.0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>options<span class="token punctuation">.</span>length<span class="token punctuation">}</span> Items<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design <span class="token number">3.0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ant Design 3.0 Select demo<span class="token punctuation">"</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&amp;hidenavigation=1&amp;theme=dark&amp;view=preview<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(L){return L&&L.__esModule?L:{default:L}}for(var y=h.Typography.Title,R=[],w=0;w<1e5;w++){var A="".concat(w.toString(36)).concat(w);R.push({label:A,value:A,disabled:w===10})}var b=function(U){console.log("selected ".concat(U))},d=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(y,{level:3},"Ant Design 4.0"),u.default.createElement(y,{level:4},R.length," Items"),u.default.createElement(h.Select,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:b,options:R}),u.default.createElement(h.Divider,null),u.default.createElement(y,{level:3},"Ant Design 3.0"),u.default.createElement("iframe",{title:"Ant Design 3.0 Select demo",src:"https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:300}}))},P=d;return N.createElement(P)}}},4552:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u65E0\u8FB9\u6846\u6837\u5F0F\u3002"]],"en-US":[["p","Bordered-less style component."]]},meta:{order:23,title:{"zh-CN":"\u65E0\u8FB9\u6846","en-US":"Bordered-less"},filename:"components/select/demo/bordered.md",id:"components-select-demo-bordered"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      bordered<span class="token operator">=</span>{<span class="token boolean">false</span>}
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      disabled
      bordered<span class="token operator">=</span>{<span class="token boolean">false</span>}
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">bordered</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">bordered</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">bordered</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">bordered</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(w){return w&&w.__esModule?w:{default:w}}var y=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},bordered:!1,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"}]}),u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:120},disabled:!0,bordered:!1,options:[{value:"lucy",label:"Lucy"}]}))},R=y;return N.createElement(R)}}},4553:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002"],["p","\u63A8\u8350\u4F7F\u7528 ",["a",{title:null,href:"/components/cascader/"},"Cascader"]," \u7EC4\u4EF6\u3002"]],"en-US":[["p","Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated."],["p","Using the ",["a",{title:null,href:"/components/cascader"},"Cascader"]," component is strongly recommended instead as it is more flexible and capable."]]},meta:{order:7,title:{"zh-CN":"\u8054\u52A8","en-US":"coordinate"},filename:"components/select/demo/coordinate.md",id:"components-select-demo-coordinate"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> provinceData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> cityData <span class="token operator">=</span> {
  Zhejiang<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'Hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'Ningbo'</span><span class="token punctuation">,</span> <span class="token string">'Wenzhou'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  Jiangsu<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'Nanjing'</span><span class="token punctuation">,</span> <span class="token string">'Suzhou'</span><span class="token punctuation">,</span> <span class="token string">'Zhenjiang'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
}<span class="token comment" spellcheck="true">;</span>

type CityName <span class="token operator">=</span> keyof typeof cityData<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cities<span class="token punctuation">,</span> setCities<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> as CityName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>secondCity<span class="token punctuation">,</span> setSecondCity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> as CityName<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleProvinceChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> CityName<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setCities</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSecondCityChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> CityName<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        defaultValue<span class="token operator">=</span>{provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>}
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
        onChange<span class="token operator">=</span>{handleProvinceChange}
        options<span class="token operator">=</span>{provinceData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>province <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{ label<span class="token punctuation">:</span> province<span class="token punctuation">,</span> value<span class="token punctuation">:</span> province }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
        value<span class="token operator">=</span>{secondCity}
        onChange<span class="token operator">=</span>{onSecondCityChange}
        options<span class="token operator">=</span>{cities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>city <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{ label<span class="token punctuation">:</span> city<span class="token punctuation">,</span> value<span class="token punctuation">:</span> city }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> provinceData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cityData <span class="token operator">=</span> <span class="token punctuation">{</span>
  Zhejiang<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'Ningbo'</span><span class="token punctuation">,</span> <span class="token string">'Wenzhou'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  Jiangsu<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Nanjing'</span><span class="token punctuation">,</span> <span class="token string">'Suzhou'</span><span class="token punctuation">,</span> <span class="token string">'Zhenjiang'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type CityName <span class="token operator">=</span> keyof <span class="token keyword">typeof</span> cityData<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cities<span class="token punctuation">,</span> setCities<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> CityName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>secondCity<span class="token punctuation">,</span> setSecondCity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> CityName<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleProvinceChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> CityName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCities</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSecondCityChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> CityName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleProvinceChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>provinceData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>province <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token operator">:</span> province<span class="token punctuation">,</span> value<span class="token operator">:</span> province <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>secondCity<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSecondCityChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>cities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>city <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token operator">:</span> city<span class="token punctuation">,</span> value<span class="token operator">:</span> city <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> provinceData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cityData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Zhejiang</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'Ningbo'</span><span class="token punctuation">,</span> <span class="token string">'Wenzhou'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Jiangsu</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Nanjing'</span><span class="token punctuation">,</span> <span class="token string">'Suzhou'</span><span class="token punctuation">,</span> <span class="token string">'Zhenjiang'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cities<span class="token punctuation">,</span> setCities<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>secondCity<span class="token punctuation">,</span> setSecondCity<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleProvinceChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCities</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>cityData<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSecondCityChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSecondCity</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>provinceData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleProvinceChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>provinceData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">province</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> province<span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> province<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>secondCity<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSecondCityChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>cities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">city</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> city<span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> city<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(o){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},h(o)}var u=a(12),r=R(a(0));function y(o){if(typeof WeakMap!="function")return null;var p=new WeakMap,n=new WeakMap;return(y=function(s){return s?n:p})(o)}function R(o,p){if(!p&&o&&o.__esModule)return o;if(o===null||h(o)!=="object"&&typeof o!="function")return{default:o};var n=y(p);if(n&&n.has(o))return n.get(o);var l={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in o)if(t!=="default"&&Object.prototype.hasOwnProperty.call(o,t)){var c=s?Object.getOwnPropertyDescriptor(o,t):null;c&&(c.get||c.set)?Object.defineProperty(l,t,c):l[t]=o[t]}return l.default=o,n&&n.set(o,l),l}function w(o,p){return L(o)||P(o,p)||b(o,p)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(o,p){if(o){if(typeof o=="string")return d(o,p);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor&&(n=o.constructor.name),n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(o,p)}}function d(o,p){(p==null||p>o.length)&&(p=o.length);for(var n=0,l=new Array(p);n<p;n++)l[n]=o[n];return l}function P(o,p){var n=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(n!=null){var l,s,t,c,g=[],O=!0,T=!1;try{if(t=(n=n.call(o)).next,p===0){if(Object(n)!==n)return;O=!1}else for(;!(O=(l=t.call(n)).done)&&(g.push(l.value),g.length!==p);O=!0);}catch(e){T=!0,s=e}finally{try{if(!O&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(T)throw s}}return g}}function L(o){if(Array.isArray(o))return o}var U=["Zhejiang","Jiangsu"],M={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},S=function(){var p=(0,r.useState)(M[U[0]]),n=w(p,2),l=n[0],s=n[1],t=(0,r.useState)(M[U[0]][0]),c=w(t,2),g=c[0],O=c[1],T=function(f){s(M[f]),O(M[f][0])},e=function(f){O(f)};return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.Select,{defaultValue:U[0],style:{width:120},onChange:T,options:U.map(function(m){return{label:m,value:m}})}),r.default.createElement(u.Select,{style:{width:120},value:g,onChange:e,options:l.map(function(m){return{label:m,value:m}})}))},k=S;return N.createElement(k)}}},4554:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","open"]," \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002\u5982\u679C\u5E0C\u671B\u70B9\u51FB\u81EA\u5B9A\u4E49\u5185\u5BB9\u540E\u5173\u95ED\u6D6E\u5C42\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u53D7\u63A7\u6A21\u5F0F\u81EA\u884C\u63A7\u5236\uFF08",["a",{title:null,href:"https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js"},"codesandbox"],"\uFF09\u3002"]],"en-US":[["p","Customize the dropdown menu via ",["code","dropdownRender"],". If you want to close the dropdown after clicking the custom content, you need to control ",["code","open"]," prop, here is an ",["a",{title:null,href:"https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js"},"codesandbox"],"."]]},meta:{order:21,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},filename:"components/select/demo/custom-dropdown-menu.md",id:"components-select-demo-custom-dropdown-menu"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { PlusOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Divider<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> <span class="token keyword">Select</span><span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { InputRef } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState<span class="token punctuation">,</span> useRef } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

let index <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jack'</span><span class="token punctuation">,</span> <span class="token string">'lucy'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>InputRef<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onNameChange <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setName</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> addItem <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLAnchorElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>items<span class="token punctuation">,</span> name || \`New item \${index<span class="token operator">+</span><span class="token operator">+</span>}\`<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      inputRef<span class="token punctuation">.</span>current<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">300</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"custom dropdown render"</span>
      dropdownRender<span class="token operator">=</span>{menu <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;></span>
          {menu}
          <span class="token operator">&lt;</span>Divider style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'8px 0'</span> }} <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Space style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 8px 4px'</span> }}<span class="token operator">></span>
            <span class="token operator">&lt;</span>Input
              placeholder<span class="token operator">=</span><span class="token string">"Please enter item"</span>
              ref<span class="token operator">=</span>{inputRef}
              value<span class="token operator">=</span>{name}
              onChange<span class="token operator">=</span>{onNameChange}
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"text"</span> icon<span class="token operator">=</span>{<span class="token operator">&lt;</span>PlusOutlined <span class="token operator">/</span><span class="token operator">></span>} onClick<span class="token operator">=</span>{addItem}<span class="token operator">></span>
              Add item
            <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span>}
      options<span class="token operator">=</span>{items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{ label<span class="token punctuation">:</span> item<span class="token punctuation">,</span> value<span class="token punctuation">:</span> item }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PlusOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> InputRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jack'</span><span class="token punctuation">,</span> <span class="token string">'lucy'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>InputRef<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onNameChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLAnchorElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">,</span> name <span class="token operator">||</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">New item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token operator">++</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom dropdown render<span class="token punctuation">"</span></span>
      <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>menu<span class="token punctuation">}</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'8px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 8px 4px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter item<span class="token punctuation">"</span></span>
              <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>
              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onNameChange<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PlusOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addItem<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
              Add item
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token operator">:</span> item<span class="token punctuation">,</span> value<span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> PlusOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jack'</span><span class="token punctuation">,</span> <span class="token string">'lucy'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onNameChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">addItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">,</span> name <span class="token operator">||</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">New item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token operator">++</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom dropdown render<span class="token punctuation">"</span></span>
      <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">menu</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>menu<span class="token punctuation">}</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'8px 0'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 8px 4px'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter item<span class="token punctuation">"</span></span>
              <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>
              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onNameChange<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PlusOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addItem<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
              Add item
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(s){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(s)}var u=a(61),r=a(12),y=w(a(0));function R(s){if(typeof WeakMap!="function")return null;var t=new WeakMap,c=new WeakMap;return(R=function(O){return O?c:t})(s)}function w(s,t){if(!t&&s&&s.__esModule)return s;if(s===null||h(s)!=="object"&&typeof s!="function")return{default:s};var c=R(t);if(c&&c.has(s))return c.get(s);var g={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in s)if(T!=="default"&&Object.prototype.hasOwnProperty.call(s,T)){var e=O?Object.getOwnPropertyDescriptor(s,T):null;e&&(e.get||e.set)?Object.defineProperty(g,T,e):g[T]=s[T]}return g.default=s,c&&c.set(s,g),g}function A(s){return P(s)||d(s)||M(s)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function P(s){if(Array.isArray(s))return S(s)}function L(s,t){return o(s)||k(s,t)||M(s,t)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(s,t){if(s){if(typeof s=="string")return S(s,t);var c=Object.prototype.toString.call(s).slice(8,-1);if(c==="Object"&&s.constructor&&(c=s.constructor.name),c==="Map"||c==="Set")return Array.from(s);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return S(s,t)}}function S(s,t){(t==null||t>s.length)&&(t=s.length);for(var c=0,g=new Array(t);c<t;c++)g[c]=s[c];return g}function k(s,t){var c=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(c!=null){var g,O,T,e,m=[],f=!0,j=!1;try{if(T=(c=c.call(s)).next,t===0){if(Object(c)!==c)return;f=!1}else for(;!(f=(g=T.call(c)).done)&&(m.push(g.value),m.length!==t);f=!0);}catch(z){j=!0,O=z}finally{try{if(!f&&c.return!=null&&(e=c.return(),Object(e)!==e))return}finally{if(j)throw O}}return m}}function o(s){if(Array.isArray(s))return s}var p=0,n=function(){var t=(0,y.useState)(["jack","lucy"]),c=L(t,2),g=c[0],O=c[1],T=(0,y.useState)(""),e=L(T,2),m=e[0],f=e[1],j=(0,y.useRef)(null),z=function(J){f(J.target.value)},V=function(J){J.preventDefault(),O([].concat(A(g),[m||"New item ".concat(p++)])),f(""),setTimeout(function(){var F;(F=j.current)===null||F===void 0||F.focus()},0)};return y.default.createElement(r.Select,{style:{width:300},placeholder:"custom dropdown render",dropdownRender:function(J){return y.default.createElement(y.default.Fragment,null,J,y.default.createElement(r.Divider,{style:{margin:"8px 0"}}),y.default.createElement(r.Space,{style:{padding:"0 8px 4px"}},y.default.createElement(r.Input,{placeholder:"Please enter item",ref:j,value:m,onChange:z}),y.default.createElement(r.Button,{type:"text",icon:y.default.createElement(u.PlusOutlined,null),onClick:V},"Add item")))},options:g.map(function(q){return{label:q,value:q}})})},l=n;return N.createElement(l)}}},4555:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u5141\u8BB8\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E\u7684\u6837\u5F0F\u3002"]],"en-US":[["p","Allows for custom rendering of tags."]]},meta:{order:24,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E","en-US":"Custom Tag Render"},filename:"components/select/demo/custom-tag-render.md",id:"components-select-demo-custom-tag-render"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span><span class="token punctuation">,</span> Tag } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { CustomTagProps } from <span class="token string">'rc-select/lib/BaseSelect'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>{ value<span class="token punctuation">:</span> <span class="token string">'gold'</span> }<span class="token punctuation">,</span> { value<span class="token punctuation">:</span> <span class="token string">'lime'</span> }<span class="token punctuation">,</span> { value<span class="token punctuation">:</span> <span class="token string">'green'</span> }<span class="token punctuation">,</span> { value<span class="token punctuation">:</span> <span class="token string">'cyan'</span> }<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> tagRender <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> CustomTagProps<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> { label<span class="token punctuation">,</span> value<span class="token punctuation">,</span> closable<span class="token punctuation">,</span> onClose } <span class="token operator">=</span> props<span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> onPreventMouseDown <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLSpanElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>
  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tag
      color<span class="token operator">=</span>{value}
      onMouseDown<span class="token operator">=</span>{onPreventMouseDown}
      closable<span class="token operator">=</span>{closable}
      onClose<span class="token operator">=</span>{onClose}
      style<span class="token operator">=</span>{{ marginRight<span class="token punctuation">:</span> <span class="token number">3</span> }}
    <span class="token operator">></span>
      {label}
    <span class="token operator">&lt;</span><span class="token operator">/</span>Tag<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    mode<span class="token operator">=</span><span class="token string">"multiple"</span>
    showArrow
    tagRender<span class="token operator">=</span>{tagRender}
    defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'gold'</span><span class="token punctuation">,</span> <span class="token string">'cyan'</span><span class="token punctuation">]</span>}
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    options<span class="token operator">=</span>{options}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> CustomTagProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rc-select/lib/BaseSelect'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'gold'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'lime'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'green'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'cyan'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">tagRender</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> CustomTagProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> label<span class="token punctuation">,</span> value<span class="token punctuation">,</span> closable<span class="token punctuation">,</span> onClose <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onPreventMouseDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLSpanElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>
      <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">onMouseDown</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onPreventMouseDown<span class="token punctuation">}</span></span>
      <span class="token attr-name">closable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>closable<span class="token punctuation">}</span></span>
      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>label<span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
    <span class="token attr-name">showArrow</span>
    <span class="token attr-name">tagRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tagRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'gold'</span><span class="token punctuation">,</span> <span class="token string">'cyan'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'gold'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lime'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'green'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cyan'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">tagRender</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> label<span class="token punctuation">,</span> value<span class="token punctuation">,</span> closable<span class="token punctuation">,</span> onClose <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onPreventMouseDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>
      <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">onMouseDown</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onPreventMouseDown<span class="token punctuation">}</span></span>
      <span class="token attr-name">closable</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>closable<span class="token punctuation">}</span></span>
      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClose<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>label<span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
    <span class="token attr-name">showArrow</span>
    <span class="token attr-name">tagRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tagRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'gold'</span><span class="token punctuation">,</span> <span class="token string">'cyan'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(b){return b&&b.__esModule?b:{default:b}}var y=[{value:"gold"},{value:"lime"},{value:"green"},{value:"cyan"}],R=function(d){var P=d.label,L=d.value,U=d.closable,M=d.onClose,S=function(o){o.preventDefault(),o.stopPropagation()};return u.default.createElement(h.Tag,{color:L,onMouseDown:S,closable:U,onClose:M,style:{marginRight:3}},P)},w=function(){return u.default.createElement(h.Select,{mode:"multiple",showArrow:!0,tagRender:R,defaultValue:["gold","cyan"],style:{width:"100%"},options:y})},A=w;return N.createElement(A)}}},4556:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u57FA\u672C\u4F7F\u7528\u3002"]],"en-US":[["p","Basic Usage."]]},meta:{order:999,title:{"zh-CN":"4.0 Debug","en-US":"4.0 Debug"},debug:!0,filename:"components/select/demo/debug.md",id:"components-select-demo-debug"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string | string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div
    style<span class="token operator">=</span>{{
      width<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      position<span class="token punctuation">:</span> <span class="token string">'relative'</span><span class="token punctuation">,</span>
      zIndex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      border<span class="token punctuation">:</span> <span class="token string">'1px solid red'</span><span class="token punctuation">,</span>
      background<span class="token punctuation">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
    }}
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>Input style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">100</span> }} value<span class="token operator">=</span><span class="token string">"222"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      onChange<span class="token operator">=</span>{handleChange}
      showSearch
      placeholder<span class="token operator">=</span><span class="token string">"233"</span>
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'lucy'</span><span class="token punctuation">]</span>}
      onChange<span class="token operator">=</span>{handleChange}
      showSearch
      placeholder<span class="token operator">=</span><span class="token string">"233"</span>
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"debug-align"</span><span class="token operator">></span>AntDesign<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>Button<span class="token operator">></span><span class="token number">222</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">'relative'</span><span class="token punctuation">,</span>
      zIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      border<span class="token operator">:</span> <span class="token string">'1px solid red'</span><span class="token punctuation">,</span>
      background<span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>222<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>233<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'lucy'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>233<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>debug-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>AntDesign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token number">222</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'relative'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'1px solid red'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>222<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>233<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'lucy'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>233<span class="token punctuation">"</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'I am super super long!'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>debug-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>AntDesign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token number">222</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(A){return A&&A.__esModule?A:{default:A}}var y=function(b){console.log("selected ".concat(b))},R=function(){return u.default.createElement("div",{style:{width:500,position:"relative",zIndex:1,border:"1px solid red",background:"#FFF"}},u.default.createElement(h.Input,{style:{width:100},value:"222"}),u.default.createElement(h.Select,{style:{width:120},onChange:y,showSearch:!0,placeholder:"233",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",disabled:!0,label:"Disabled"},{value:"Yiminghe",label:"yiminghe"},{value:"long",label:"I am super super long!"}]}),u.default.createElement(h.Select,{mode:"multiple",style:{width:120},defaultValue:["lucy"],onChange:y,showSearch:!0,placeholder:"233",options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",disabled:!0,label:"Disabled"},{value:"Yiminghe",label:"yiminghe"},{value:"long",label:"I am super super long!"}]}),u.default.createElement("span",{className:"debug-align"},"AntDesign"),u.default.createElement(h.Button,null,"222"))},w=R;return N.createElement(w)},style:`
#components-select-demo-debug .debug-align {
  position: relative;
  display: inline-block;
  line-height: 32px;
  height: 32px;
  background: rgba(255, 0, 0, 0.1);
  box-sizing: border-box;
}
#components-select-demo-debug .debug-align:after {
  position: absolute;
  content: '';
  border: 1px solid green;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
}
`}},4557:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002"]],"en-US":[["p","Hide already selected options in the dropdown."]]},meta:{order:22,title:{"zh-CN":"\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879","en-US":"Hide Already Selected"},filename:"components/select/demo/hide-selected.md",id:"components-select-demo-hide-selected"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> OPTIONS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Apples'</span><span class="token punctuation">,</span> <span class="token string">'Nails'</span><span class="token punctuation">,</span> <span class="token string">'Bananas'</span><span class="token punctuation">,</span> <span class="token string">'Helicopters'</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedItems<span class="token punctuation">,</span> setSelectedItems<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> filteredOptions <span class="token operator">=</span> OPTIONS<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>o <span class="token operator">=</span><span class="token operator">></span> !selectedItems<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      placeholder<span class="token operator">=</span><span class="token string">"Inserted are removed"</span>
      value<span class="token operator">=</span>{selectedItems}
      onChange<span class="token operator">=</span>{setSelectedItems}
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      options<span class="token operator">=</span>{filteredOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
        value<span class="token punctuation">:</span> item<span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> item<span class="token punctuation">,</span>
      }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">OPTIONS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Apples'</span><span class="token punctuation">,</span> <span class="token string">'Nails'</span><span class="token punctuation">,</span> <span class="token string">'Bananas'</span><span class="token punctuation">,</span> <span class="token string">'Helicopters'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedItems<span class="token punctuation">,</span> setSelectedItems<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> filteredOptions <span class="token operator">=</span> <span class="token constant">OPTIONS</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>o <span class="token operator">=></span> <span class="token operator">!</span>selectedItems<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Inserted are removed<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedItems<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setSelectedItems<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filteredOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        value<span class="token operator">:</span> item<span class="token punctuation">,</span>
        label<span class="token operator">:</span> item<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">OPTIONS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Apples'</span><span class="token punctuation">,</span> <span class="token string">'Nails'</span><span class="token punctuation">,</span> <span class="token string">'Bananas'</span><span class="token punctuation">,</span> <span class="token string">'Helicopters'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedItems<span class="token punctuation">,</span> setSelectedItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredOptions <span class="token operator">=</span> <span class="token constant">OPTIONS</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>selectedItems<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Inserted are removed<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedItems<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setSelectedItems<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filteredOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(k){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(k)}var u=a(12),r=R(a(0));function y(k){if(typeof WeakMap!="function")return null;var o=new WeakMap,p=new WeakMap;return(y=function(l){return l?p:o})(k)}function R(k,o){if(!o&&k&&k.__esModule)return k;if(k===null||h(k)!=="object"&&typeof k!="function")return{default:k};var p=y(o);if(p&&p.has(k))return p.get(k);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in k)if(s!=="default"&&Object.prototype.hasOwnProperty.call(k,s)){var t=l?Object.getOwnPropertyDescriptor(k,s):null;t&&(t.get||t.set)?Object.defineProperty(n,s,t):n[s]=k[s]}return n.default=k,p&&p.set(k,n),n}function w(k,o){return L(k)||P(k,o)||b(k,o)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(k,o){if(k){if(typeof k=="string")return d(k,o);var p=Object.prototype.toString.call(k).slice(8,-1);if(p==="Object"&&k.constructor&&(p=k.constructor.name),p==="Map"||p==="Set")return Array.from(k);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return d(k,o)}}function d(k,o){(o==null||o>k.length)&&(o=k.length);for(var p=0,n=new Array(o);p<o;p++)n[p]=k[p];return n}function P(k,o){var p=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(p!=null){var n,l,s,t,c=[],g=!0,O=!1;try{if(s=(p=p.call(k)).next,o===0){if(Object(p)!==p)return;g=!1}else for(;!(g=(n=s.call(p)).done)&&(c.push(n.value),c.length!==o);g=!0);}catch(T){O=!0,l=T}finally{try{if(!g&&p.return!=null&&(t=p.return(),Object(t)!==t))return}finally{if(O)throw l}}return c}}function L(k){if(Array.isArray(k))return k}var U=["Apples","Nails","Bananas","Helicopters"],M=function(){var o=(0,r.useState)([]),p=w(o,2),n=p[0],l=p[1],s=U.filter(function(t){return!n.includes(t)});return r.default.createElement(u.Select,{mode:"multiple",placeholder:"Inserted are removed",value:n,onChange:l,style:{width:"100%"},options:s.map(function(t){return{value:t,label:t}})})},S=M;return N.createElement(S)}}},4558:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u60C5\u51B5\u4E0B ",["code","onChange"]," \u91CC\u53EA\u80FD\u62FF\u5230 ",["code","value"],"\uFF0C\u5982\u679C\u9700\u8981\u62FF\u5230\u9009\u4E2D\u7684\u8282\u70B9\u6587\u672C ",["code","label"],"\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",["code","labelInValue"]," \u5C5E\u6027\u3002"],["p","\u9009\u4E2D\u9879\u7684 ",["code","label"]," \u4F1A\u88AB\u5305\u88C5\u5230 ",["code","value"]," \u4E2D\u4F20\u9012\u7ED9 ",["code","onChange"]," \u7B49\u51FD\u6570\uFF0C\u6B64\u65F6 ",["code","value"]," \u662F\u4E00\u4E2A\u5BF9\u8C61\u3002"]],"en-US":[["p","As a default behavior, the ",["code","onChange"]," callback can only get the ",["code","value"]," of the selected item. The ",["code","labelInValue"]," prop can be used to get the ",["code","label"]," property of the selected item."],["p","The ",["code","label"]," of the selected item will be packed as an object for passing to the ",["code","onChange"]," callback."]]},meta:{order:10,title:{"zh-CN":"\u83B7\u5F97\u9009\u9879\u7684\u6587\u672C","en-US":"Get value of selected item"},filename:"components/select/demo/label-in-value.md",id:"components-select-demo-label-in-value"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> { value<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">; label: React.ReactNode }) => {</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">; // { value: "lucy", key: "lucy", label: "Lucy (101)" }</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    labelInValue
    defaultValue<span class="token operator">=</span>{{ value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Lucy (101)'</span> }}
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
    onChange<span class="token operator">=</span>{handleChange}
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Jack (100)'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Lucy (101)'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> string<span class="token punctuation">;</span> label<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: "lucy", key: "lucy", label: "Lucy (101)" }</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">labelInValue</span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">'Lucy (101)'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Jack (100)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Lucy (101)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: "lucy", key: "lucy", label: "Lucy (101)" }</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">labelInValue</span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy (101)'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack (100)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy (101)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(A){return A&&A.__esModule?A:{default:A}}var y=function(b){console.log(b)},R=function(){return u.default.createElement(h.Select,{labelInValue:!0,defaultValue:{value:"lucy",label:"Lucy (101)"},style:{width:120},onChange:y,options:[{value:"jack",label:"Jack (100)"},{value:"lucy",label:"Lucy (101)"}]})},w=R;return N.createElement(w)}}},4559:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\u3002"]],"en-US":[["p","Multiple selection, selecting from existing items."]]},meta:{order:2,title:{"zh-CN":"\u591A\u9009","en-US":"multiple selection"},filename:"components/select/demo/multiple.md",id:"components-select-demo-multiple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options<span class="token punctuation">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">10</span><span class="token comment" spellcheck="true">; i &lt; 36; i++) {</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    label<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      allowClear
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span>}
      onChange<span class="token operator">=</span>{handleChange}
      options<span class="token operator">=</span>{options}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      disabled
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
      defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span>}
      onChange<span class="token operator">=</span>{handleChange}
      options<span class="token operator">=</span>{options}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    label<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    value<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowClear</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(d){return d&&d.__esModule?d:{default:d}}for(var y=[],R=10;R<36;R++)y.push({label:R.toString(36)+R,value:R.toString(36)+R});var w=function(P){console.log("selected ".concat(P))},A=function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement(h.Select,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:w,options:y}),u.default.createElement("br",null),u.default.createElement(h.Select,{mode:"multiple",disabled:!0,style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:w,options:y}))},b=A;return N.createElement(b)}}},4560:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u7528 ",["code","OptGroup"]," \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002"]],"en-US":[["p","Using ",["code","OptGroup"]," to group the options."]]},meta:{order:6,title:{"zh-CN":"\u5206\u7EC4","en-US":"Option Group"},filename:"components/select/demo/optgroup.md",id:"components-select-demo-optgroup"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">200</span> }}
    onChange<span class="token operator">=</span>{handleChange}
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'Manager'</span><span class="token punctuation">,</span>
        options<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'jack'</span> }<span class="token punctuation">,</span>
          { label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'lucy'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'Engineer'</span><span class="token punctuation">,</span>
        options<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Manager'</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'jack'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'lucy'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Engineer'</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Manager'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Engineer'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(A){return A&&A.__esModule?A:{default:A}}var y=function(b){console.log("selected ".concat(b))},R=function(){return u.default.createElement(h.Select,{defaultValue:"lucy",style:{width:200},onChange:y,options:[{label:"Manager",options:[{label:"Jack",value:"jack"},{label:"Lucy",value:"lucy"}]},{label:"Engineer",options:[{label:"yiminghe",value:"Yiminghe"}]}]})},w=R;return N.createElement(w)}}},4561:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","optionLabelProp"]," \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 ",["code","Option"]," \u5C5E\u6027\u3002"]],"en-US":[["p","Specify the prop name of Option which will be rendered in select box."]]},meta:{order:4,title:{"zh-CN":"\u5B9A\u5236\u56DE\u586B\u5185\u5BB9","en-US":"Custom selection render"},filename:"components/select/demo/option-label-prop.md",id:"components-select-demo-option-label-prop"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Option } <span class="token operator">=</span> <span class="token keyword">Select</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    mode<span class="token operator">=</span><span class="token string">"multiple"</span>
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    placeholder<span class="token operator">=</span><span class="token string">"select one country"</span>
    defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'china'</span><span class="token punctuation">]</span>}
    onChange<span class="token operator">=</span>{handleChange}
    optionLabelProp<span class="token operator">=</span><span class="token string">"label"</span>
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"china"</span> label<span class="token operator">=</span><span class="token string">"China"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"demo-option-label-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span role<span class="token operator">=</span><span class="token string">"img"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"China"</span><span class="token operator">></span>
          \u{1F1E8}\u{1F1F3}
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        China <span class="token punctuation">(</span>\u4E2D\u56FD<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
    <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"usa"</span> label<span class="token operator">=</span><span class="token string">"USA"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"demo-option-label-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span role<span class="token operator">=</span><span class="token string">"img"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"USA"</span><span class="token operator">></span>
          \u{1F1FA}\u{1F1F8}
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        USA <span class="token punctuation">(</span>\u7F8E\u56FD<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
    <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"japan"</span> label<span class="token operator">=</span><span class="token string">"Japan"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"demo-option-label-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span role<span class="token operator">=</span><span class="token string">"img"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Japan"</span><span class="token operator">></span>
          \u{1F1EF}\u{1F1F5}
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        Japan <span class="token punctuation">(</span>\u65E5\u672C<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
    <span class="token operator">&lt;</span>Option value<span class="token operator">=</span><span class="token string">"korea"</span> label<span class="token operator">=</span><span class="token string">"Korea"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"demo-option-label-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span role<span class="token operator">=</span><span class="token string">"img"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Korea"</span><span class="token operator">></span>
          \u{1F1F0}\u{1F1F7}
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        Korea <span class="token punctuation">(</span>\u97E9\u56FD<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">Select</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Select<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select one country<span class="token punctuation">"</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'china'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">optionLabelProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>china<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>China<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>China<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1E8}\u{1F1F3}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">China</span> <span class="token punctuation">(</span>\u4E2D\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>usa<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1FA}\u{1F1F8}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token constant">USA</span> <span class="token punctuation">(</span>\u7F8E\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>japan<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Japan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Japan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1EF}\u{1F1F5}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">Japan</span> <span class="token punctuation">(</span>\u65E5\u672C<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>korea<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Korea<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Korea<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1F0}\u{1F1F7}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">Korea</span> <span class="token punctuation">(</span>\u97E9\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Select<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select one country<span class="token punctuation">"</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'china'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">optionLabelProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>china<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>China<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>China<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1E8}\u{1F1F3}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">China</span> <span class="token punctuation">(</span>\u4E2D\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>usa<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1FA}\u{1F1F8}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token constant">USA</span> <span class="token punctuation">(</span>\u7F8E\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>japan<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Japan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Japan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1EF}\u{1F1F5}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">Japan</span> <span class="token punctuation">(</span>\u65E5\u672C<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>korea<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Korea<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo-option-label-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Korea<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          \u{1F1F0}\u{1F1F7}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token function">Korea</span> <span class="token punctuation">(</span>\u97E9\u56FD<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Option</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(b){return b&&b.__esModule?b:{default:b}}var y=h.Select.Option,R=function(d){console.log("selected ".concat(d))},w=function(){return u.default.createElement(h.Select,{mode:"multiple",style:{width:"100%"},placeholder:"select one country",defaultValue:["china"],onChange:R,optionLabelProp:"label"},u.default.createElement(y,{value:"china",label:"China"},u.default.createElement("div",{className:"demo-option-label-item"},u.default.createElement("span",{role:"img","aria-label":"China"},"\u{1F1E8}\u{1F1F3}"),"China (\u4E2D\u56FD)")),u.default.createElement(y,{value:"usa",label:"USA"},u.default.createElement("div",{className:"demo-option-label-item"},u.default.createElement("span",{role:"img","aria-label":"USA"},"\u{1F1FA}\u{1F1F8}"),"USA (\u7F8E\u56FD)")),u.default.createElement(y,{value:"japan",label:"Japan"},u.default.createElement("div",{className:"demo-option-label-item"},u.default.createElement("span",{role:"img","aria-label":"Japan"},"\u{1F1EF}\u{1F1F5}"),"Japan (\u65E5\u672C)")),u.default.createElement(y,{value:"korea",label:"Korea"},u.default.createElement("div",{className:"demo-option-label-item"},u.default.createElement("span",{role:"img","aria-label":"Korea"},"\u{1F1F0}\u{1F1F7}"),"Korea (\u97E9\u56FD)")))},A=w;return N.createElement(A)},style:`.demo-option-label-item > span {
  margin-right: 6px;
}`,highlightedStyle:`<span class="token selector"><span class="token class">.demo-option-label-item</span> > span </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">6</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4562:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u901A\u8FC7 ",["code","placement"]," \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002"]],"en-US":[["p","You can manually specify the position of the popup via ",["code","placement"],"."]]},meta:{order:38,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},filename:"components/select/demo/placement.md",id:"components-select-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { RadioChangeEvent } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Radio<span class="token punctuation">,</span> <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectCommonPlacement } from <span class="token string">'antd/es/_util/motion'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectCommonPlacement<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> placementChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Group value<span class="token operator">=</span>{placement} onChange<span class="token operator">=</span>{placementChange}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"topLeft"</span><span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"topRight"</span><span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"bottomLeft"</span><span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"bottomRight"</span><span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Group<span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        defaultValue<span class="token operator">=</span><span class="token string">"HangZhou"</span>
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
        dropdownMatchSelectWidth<span class="token operator">=</span>{<span class="token boolean">false</span>}
        placement<span class="token operator">=</span>{placement}
        options<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'HangZhou'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'HangZhou #310000'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'NingBo'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'NingBo #315000'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            value<span class="token punctuation">:</span> <span class="token string">'WenZhou'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'WenZhou #325000'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> RadioChangeEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectCommonPlacement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/_util/motion'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectCommonPlacement<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">placementChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placementChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HangZhou<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">dropdownMatchSelectWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'HangZhou'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'HangZhou #310000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'NingBo'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'NingBo #315000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token string">'WenZhou'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'WenZhou #325000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>placement<span class="token punctuation">,</span> SetPlacement<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'topLeft'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">placementChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">SetPlacement</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placementChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HangZhou<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">dropdownMatchSelectWidth</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>placement<span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'HangZhou'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'HangZhou #310000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'NingBo'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'NingBo #315000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'WenZhou'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'WenZhou #325000'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(S){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},h(S)}var u=a(12),r=R(a(0));function y(S){if(typeof WeakMap!="function")return null;var k=new WeakMap,o=new WeakMap;return(y=function(n){return n?o:k})(S)}function R(S,k){if(!k&&S&&S.__esModule)return S;if(S===null||h(S)!=="object"&&typeof S!="function")return{default:S};var o=y(k);if(o&&o.has(S))return o.get(S);var p={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in S)if(l!=="default"&&Object.prototype.hasOwnProperty.call(S,l)){var s=n?Object.getOwnPropertyDescriptor(S,l):null;s&&(s.get||s.set)?Object.defineProperty(p,l,s):p[l]=S[l]}return p.default=S,o&&o.set(S,p),p}function w(S,k){return L(S)||P(S,k)||b(S,k)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(S,k){if(S){if(typeof S=="string")return d(S,k);var o=Object.prototype.toString.call(S).slice(8,-1);if(o==="Object"&&S.constructor&&(o=S.constructor.name),o==="Map"||o==="Set")return Array.from(S);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(S,k)}}function d(S,k){(k==null||k>S.length)&&(k=S.length);for(var o=0,p=new Array(k);o<k;o++)p[o]=S[o];return p}function P(S,k){var o=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(o!=null){var p,n,l,s,t=[],c=!0,g=!1;try{if(l=(o=o.call(S)).next,k===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(p=l.call(o)).done)&&(t.push(p.value),t.length!==k);c=!0);}catch(O){g=!0,n=O}finally{try{if(!c&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(g)throw n}}return t}}function L(S){if(Array.isArray(S))return S}var U=function(){var k=(0,r.useState)("topLeft"),o=w(k,2),p=o[0],n=o[1],l=function(t){n(t.target.value)};return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.Radio.Group,{value:p,onChange:l},r.default.createElement(u.Radio.Button,{value:"topLeft"},"topLeft"),r.default.createElement(u.Radio.Button,{value:"topRight"},"topRight"),r.default.createElement(u.Radio.Button,{value:"bottomLeft"},"bottomLeft"),r.default.createElement(u.Radio.Button,{value:"bottomRight"},"bottomRight")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(u.Select,{defaultValue:"HangZhou",style:{width:120},dropdownMatchSelectWidth:!1,placement:p,options:[{value:"HangZhou",label:"HangZhou #310000"},{value:"NingBo",label:"NingBo #315000"},{value:"WenZhou",label:"WenZhou #325000"}]}))},M=U;return N.createElement(M)}}},4563:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u591A\u9009\u4E0B\u901A\u8FC7\u54CD\u5E94\u5F0F\u5E03\u5C40\u8BA9\u9009\u9879\u81EA\u52A8\u6536\u7F29\u3002\u8BE5\u529F\u80FD\u5BF9\u6027\u80FD\u6709\u6240\u6D88\u8017\uFF0C\u4E0D\u63A8\u8350\u5728\u5927\u8868\u5355\u573A\u666F\u4E0B\u4F7F\u7528\u3002"]],"en-US":[["p","Auto collapse to tag with responsive case. Not recommend use in large form case since responsive calculation has a perf cost."]]},meta:{order:24,title:{"zh-CN":"\u54CD\u5E94\u5F0F maxTagCount","en-US":"Responsive maxTagCount"},filename:"components/select/demo/responsive.md",id:"components-select-demo-responsive"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { <span class="token keyword">Select</span><span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

interface ItemProps {
  label<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  value<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> options<span class="token punctuation">:</span> ItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">10</span><span class="token comment" spellcheck="true">; i &lt; 36; i++) {</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token comment" spellcheck="true">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    label<span class="token punctuation">:</span> \`Long Label<span class="token punctuation">:</span> \${value}\`<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">,</span> <span class="token string">'h17'</span><span class="token punctuation">,</span> <span class="token string">'j19'</span><span class="token punctuation">,</span> <span class="token string">'k20'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> selectProps<span class="token punctuation">:</span> SelectProps <span class="token operator">=</span> {
    mode<span class="token punctuation">:</span> <span class="token string">'multiple'</span><span class="token punctuation">,</span>
    style<span class="token punctuation">:</span> { width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }<span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    options<span class="token punctuation">,</span>
    onChange<span class="token punctuation">:</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">,</span>
    placeholder<span class="token punctuation">:</span> <span class="token string">'Select Item...'</span><span class="token punctuation">,</span>
    maxTagCount<span class="token punctuation">:</span> <span class="token string">'responsive'</span><span class="token punctuation">,</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>selectProps} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span> {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>selectProps} disabled <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ItemProps</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> string<span class="token punctuation">;</span>
  value<span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> ItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Long Label: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">,</span> <span class="token string">'h17'</span><span class="token punctuation">,</span> <span class="token string">'j19'</span><span class="token punctuation">,</span> <span class="token string">'k20'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> selectProps<span class="token operator">:</span> SelectProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">'multiple'</span><span class="token punctuation">,</span>
    style<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    options<span class="token punctuation">,</span>
    <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    placeholder<span class="token operator">:</span> <span class="token string">'Select Item...'</span><span class="token punctuation">,</span>
    maxTagCount<span class="token operator">:</span> <span class="token string">'responsive'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Long Label: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">,</span> <span class="token string">'h17'</span><span class="token punctuation">,</span> <span class="token string">'j19'</span><span class="token punctuation">,</span> <span class="token string">'k20'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> selectProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'multiple'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    value<span class="token punctuation">,</span>
    options<span class="token punctuation">,</span>
    <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Select Item...'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxTagCount</span><span class="token operator">:</span> <span class="token string">'responsive'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>selectProps<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(n){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},h(n)}var u=a(12),r=R(a(0));function y(n){if(typeof WeakMap!="function")return null;var l=new WeakMap,s=new WeakMap;return(y=function(c){return c?s:l})(n)}function R(n,l){if(!l&&n&&n.__esModule)return n;if(n===null||h(n)!=="object"&&typeof n!="function")return{default:n};var s=y(l);if(s&&s.has(n))return s.get(n);var t={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in n)if(g!=="default"&&Object.prototype.hasOwnProperty.call(n,g)){var O=c?Object.getOwnPropertyDescriptor(n,g):null;O&&(O.get||O.set)?Object.defineProperty(t,g,O):t[g]=n[g]}return t.default=n,s&&s.set(n,t),t}function w(){return w=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},w.apply(this,arguments)}function A(n,l){return U(n)||L(n,l)||d(n,l)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(n,l){if(n){if(typeof n=="string")return P(n,l);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return P(n,l)}}function P(n,l){(l==null||l>n.length)&&(l=n.length);for(var s=0,t=new Array(l);s<l;s++)t[s]=n[s];return t}function L(n,l){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t,c,g,O,T=[],e=!0,m=!1;try{if(g=(s=s.call(n)).next,l===0){if(Object(s)!==s)return;e=!1}else for(;!(e=(t=g.call(s)).done)&&(T.push(t.value),T.length!==l);e=!0);}catch(f){m=!0,c=f}finally{try{if(!e&&s.return!=null&&(O=s.return(),Object(O)!==O))return}finally{if(m)throw c}}return T}}function U(n){if(Array.isArray(n))return n}for(var M=[],S=10;S<36;S++){var k=S.toString(36)+S;M.push({label:"Long Label: ".concat(k),value:k})}var o=function(){var l=(0,r.useState)(["a10","c12","h17","j19","k20"]),s=A(l,2),t=s[0],c=s[1],g={mode:"multiple",style:{width:"100%"},value:t,options:M,onChange:function(T){c(T)},placeholder:"Select Item...",maxTagCount:"responsive"};return r.default.createElement(u.Space,{direction:"vertical",style:{width:"100%"}},r.default.createElement(u.Select,g),r.default.createElement(u.Select,w({},g,{disabled:!0})))},p=o;return N.createElement(p)}}},4564:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002"]],"en-US":[["p","Search with remote data."]]},meta:{order:9,title:{"zh-CN":"\u641C\u7D22\u6846","en-US":"Search Box"},filename:"components/select/demo/search-box.md",id:"components-select-demo-search-box"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import jsonp from <span class="token string">'fetch-jsonp'</span><span class="token comment" spellcheck="true">;</span>
import qs from <span class="token string">'qs'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

let timeout<span class="token punctuation">:</span> ReturnType<span class="token operator">&lt;</span>typeof setTimeout<span class="token operator">></span> | <span class="token keyword">null</span><span class="token comment" spellcheck="true">;</span>
let currentValue<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">,</span> callback<span class="token punctuation">:</span> Function<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> {
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token comment" spellcheck="true">;</span>
  }
  currentValue <span class="token operator">=</span> value<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> fake <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> str <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>{
      code<span class="token punctuation">:</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span>
      q<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">jsonp</span><span class="token punctuation">(</span>\`https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>suggest<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>com<span class="token operator">/</span>sug<span class="token operator">?</span>\${str}\`<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentValue <span class="token operator">==</span><span class="token operator">=</span> value<span class="token punctuation">)</span> {
          <span class="token keyword">const</span> { result } <span class="token operator">=</span> d<span class="token comment" spellcheck="true">;</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
            value<span class="token punctuation">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            text<span class="token punctuation">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          }<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fake<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> SearchInput<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC<span class="token operator">&lt;</span>{ placeholder<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">; style: React.CSSProperties }> = props => {</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleSearch <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> {
      <span class="token function">fetch</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> setData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> {
      <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      showSearch
      value<span class="token operator">=</span>{value}
      placeholder<span class="token operator">=</span>{props<span class="token punctuation">.</span>placeholder}
      style<span class="token operator">=</span>{props<span class="token punctuation">.</span>style}
      defaultActiveFirstOption<span class="token operator">=</span>{<span class="token boolean">false</span>}
      showArrow<span class="token operator">=</span>{<span class="token boolean">false</span>}
      filterOption<span class="token operator">=</span>{<span class="token boolean">false</span>}
      onSearch<span class="token operator">=</span>{handleSearch}
      onChange<span class="token operator">=</span>{handleChange}
      notFoundContent<span class="token operator">=</span>{<span class="token keyword">null</span>}
      options<span class="token operator">=</span>{<span class="token punctuation">(</span>data || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>d <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
        value<span class="token punctuation">:</span> d<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> d<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
      }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>SearchInput placeholder<span class="token operator">=</span><span class="token string">"input search text"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">200</span> }} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> jsonp <span class="token keyword">from</span> <span class="token string">'fetch-jsonp'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">'qs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> timeout<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> setTimeout<span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> currentValue<span class="token operator">:</span> string<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">,</span> callback<span class="token operator">:</span> Function<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  currentValue <span class="token operator">=</span> value<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fake</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span>
      q<span class="token operator">:</span> value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://suggest.taobao.com/sug?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> d<span class="token punctuation">;</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            value<span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fake<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> SearchInput<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> placeholder<span class="token operator">:</span> string<span class="token punctuation">;</span> style<span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperties <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fetch</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> setData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newValue<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>style<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultActiveFirstOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">showArrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">notFoundContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>data <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>d <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        value<span class="token operator">:</span> d<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        label<span class="token operator">:</span> d<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchInput</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input search text<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> jsonp <span class="token keyword">from</span> <span class="token string">'fetch-jsonp'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">'qs'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> timeout<span class="token punctuation">;</span>
<span class="token keyword">let</span> currentValue<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  currentValue <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fake</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">q</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://suggest.taobao.com/sug?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> d<span class="token punctuation">;</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fake<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">SearchInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fetch</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> setData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">showSearch</span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>style<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultActiveFirstOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">showArrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSearch<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">notFoundContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>data <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> d<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> d<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchInput</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input search text<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(t){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},h(t)}var u=b(a(0)),r=a(12),y=w(a(4565)),R=w(a(4083));function w(t){return t&&t.__esModule?t:{default:t}}function A(t){if(typeof WeakMap!="function")return null;var c=new WeakMap,g=new WeakMap;return(A=function(T){return T?g:c})(t)}function b(t,c){if(!c&&t&&t.__esModule)return t;if(t===null||h(t)!=="object"&&typeof t!="function")return{default:t};var g=A(c);if(g&&g.has(t))return g.get(t);var O={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(e!=="default"&&Object.prototype.hasOwnProperty.call(t,e)){var m=T?Object.getOwnPropertyDescriptor(t,e):null;m&&(m.get||m.set)?Object.defineProperty(O,e,m):O[e]=t[e]}return O.default=t,g&&g.set(t,O),O}function d(t,c){return S(t)||M(t,c)||L(t,c)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(t,c){if(t){if(typeof t=="string")return U(t,c);var g=Object.prototype.toString.call(t).slice(8,-1);if(g==="Object"&&t.constructor&&(g=t.constructor.name),g==="Map"||g==="Set")return Array.from(t);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return U(t,c)}}function U(t,c){(c==null||c>t.length)&&(c=t.length);for(var g=0,O=new Array(c);g<c;g++)O[g]=t[g];return O}function M(t,c){var g=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(g!=null){var O,T,e,m,f=[],j=!0,z=!1;try{if(e=(g=g.call(t)).next,c===0){if(Object(g)!==g)return;j=!1}else for(;!(j=(O=e.call(g)).done)&&(f.push(O.value),f.length!==c);j=!0);}catch(V){z=!0,T=V}finally{try{if(!j&&g.return!=null&&(m=g.return(),Object(m)!==m))return}finally{if(z)throw T}}return f}}function S(t){if(Array.isArray(t))return t}var k,o,p=function(c,g){k&&(clearTimeout(k),k=null),o=c;var O=function(){var e=R.default.stringify({code:"utf-8",q:c});(0,y.default)("https://suggest.taobao.com/sug?".concat(e)).then(function(m){return m.json()}).then(function(m){if(o===c){var f=m.result,j=f.map(function(z){return{value:z[0],text:z[0]}});g(j)}})};k=setTimeout(O,300)},n=function(c){var g=(0,u.useState)([]),O=d(g,2),T=O[0],e=O[1],m=(0,u.useState)(),f=d(m,2),j=f[0],z=f[1],V=function(F){F?p(F,e):e([])},q=function(F){z(F)};return u.default.createElement(r.Select,{showSearch:!0,value:j,placeholder:c.placeholder,style:c.style,defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onSearch:V,onChange:q,notFoundContent:null,options:(T||[]).map(function(J){return{value:J.value,label:J.text}})})},l=function(){return u.default.createElement(n,{placeholder:"input search text",style:{width:200}})},s=l;return N.createElement(s)}}},4565:function(x,W,a){var B,N,$;(function(h,u){if(!0)N=[W,x],B=u,$=typeof B=="function"?B.apply(W,N):B,$!==void 0&&(x.exports=$);else var r})(this,function(h,u){"use strict";var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function y(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function R(b){try{delete window[b]}catch(d){window[b]=void 0}}function w(b){var d=document.getElementById(b);d&&document.getElementsByTagName("head")[0].removeChild(d)}function A(b){var d=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],P=b,L=d.timeout||r.timeout,U=d.jsonpCallback||r.jsonpCallback,M=void 0;return new Promise(function(S,k){var o=d.jsonpCallbackFunction||y(),p=U+"_"+o;window[o]=function(l){S({ok:!0,json:function(){return Promise.resolve(l)}}),M&&clearTimeout(M),w(p),R(o)},P+=P.indexOf("?")===-1?"?":"&";var n=document.createElement("script");n.setAttribute("src",""+P+U+"="+o),d.charset&&n.setAttribute("charset",d.charset),d.nonce&&n.setAttribute("nonce",d.nonce),d.referrerPolicy&&n.setAttribute("referrerPolicy",d.referrerPolicy),n.id=p,document.getElementsByTagName("head")[0].appendChild(n),M=setTimeout(function(){k(new Error("JSONP request to "+b+" timed out")),R(o),w(p),window[o]=function(){R(o)}},L),n.onerror=function(){k(new Error("JSONP request to "+b+" failed")),R(o),w(p),M&&clearTimeout(M)}})}u.exports=A})},4577:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u5728\u641C\u7D22\u6A21\u5F0F\u4E0B\u5BF9\u8FC7\u6EE4\u7ED3\u679C\u9879\u8FDB\u884C\u6392\u5E8F\u3002"]],"en-US":[["p","Search the options with sorting."]]},meta:{order:4,title:{"zh-CN":"\u5E26\u6392\u5E8F\u7684\u641C\u7D22","en-US":"Search with sort"},filename:"components/select/demo/search-sort.md",id:"components-select-demo-search-sort"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    showSearch
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">200</span> }}
    placeholder<span class="token operator">=</span><span class="token string">"Search to Select"</span>
    optionFilterProp<span class="token operator">=</span><span class="token string">"children"</span>
    filterOption<span class="token operator">=</span>{<span class="token punctuation">(</span>input<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>option<span class="token operator">?</span><span class="token punctuation">.</span>label <span class="token operator">?</span><span class="token operator">?</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>}
    filterSort<span class="token operator">=</span>{<span class="token punctuation">(</span>optionA<span class="token punctuation">,</span> optionB<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token punctuation">(</span>optionA<span class="token operator">?</span><span class="token punctuation">.</span>label <span class="token operator">?</span><span class="token operator">?</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token punctuation">(</span>optionB<span class="token operator">?</span><span class="token punctuation">.</span>label <span class="token operator">?</span><span class="token operator">?</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    }
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Not Identified'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Closed'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Communicated'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Identified'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Resolved'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Cancelled'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">showSearch</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search to Select<span class="token punctuation">"</span></span>
    <span class="token attr-name">optionFilterProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>children<span class="token punctuation">"</span></span>
    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>option<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">filterSort</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>optionA<span class="token punctuation">,</span> optionB<span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token punctuation">(</span>optionA<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token punctuation">(</span>optionB<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Not Identified'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Closed'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Communicated'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Identified'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Resolved'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Cancelled'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">showSearch</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search to Select<span class="token punctuation">"</span></span>
    <span class="token attr-name">optionFilterProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>children<span class="token punctuation">"</span></span>
    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> option</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>option<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">filterSort</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">optionA<span class="token punctuation">,</span> optionB</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token punctuation">(</span>optionA<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token punctuation">(</span>optionB<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Not Identified'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Closed'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Communicated'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Identified'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Resolved'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Cancelled'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(w){return w&&w.__esModule?w:{default:w}}var y=function(){return u.default.createElement(h.Select,{showSearch:!0,style:{width:200},placeholder:"Search to Select",optionFilterProp:"children",filterOption:function(b,d){var P;return((P=d==null?void 0:d.label)!==null&&P!==void 0?P:"").includes(b)},filterSort:function(b,d){var P,L;return((P=b==null?void 0:b.label)!==null&&P!==void 0?P:"").toLowerCase().localeCompare(((L=d==null?void 0:d.label)!==null&&L!==void 0?L:"").toLowerCase())},options:[{value:"1",label:"Not Identified"},{value:"2",label:"Closed"},{value:"3",label:"Communicated"},{value:"4",label:"Identified"},{value:"5",label:"Resolved"},{value:"6",label:"Cancelled"}]})},R=y;return N.createElement(R)}}},4578:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002"]],"en-US":[["p","Search the options while expanded."]]},meta:{order:1,title:{"zh-CN":"\u5E26\u641C\u7D22\u6846","en-US":"Select with search field"},filename:"components/select/demo/search.md",id:"components-select-demo-search"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onSearch <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'search:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    showSearch
    placeholder<span class="token operator">=</span><span class="token string">"Select a person"</span>
    optionFilterProp<span class="token operator">=</span><span class="token string">"children"</span>
    onChange<span class="token operator">=</span>{onChange}
    onSearch<span class="token operator">=</span>{onSearch}
    filterOption<span class="token operator">=</span>{<span class="token punctuation">(</span>input<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token punctuation">(</span>option<span class="token operator">?</span><span class="token punctuation">.</span>label <span class="token operator">?</span><span class="token operator">?</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    }
    options<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        value<span class="token punctuation">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'search:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">showSearch</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select a person<span class="token punctuation">"</span></span>
    <span class="token attr-name">optionFilterProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>children<span class="token punctuation">"</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token punctuation">(</span>option<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'search:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">showSearch</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select a person<span class="token punctuation">"</span></span>
    <span class="token attr-name">optionFilterProp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>children<span class="token punctuation">"</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> option</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token punctuation">(</span>option<span class="token operator">?.</span>label <span class="token operator">??</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(b){return b&&b.__esModule?b:{default:b}}var y=function(d){console.log("selected ".concat(d))},R=function(d){console.log("search:",d)},w=function(){return u.default.createElement(h.Select,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:y,onSearch:R,filterOption:function(P,L){var U;return((U=L==null?void 0:L.label)!==null&&U!==void 0?U:"").toLowerCase().includes(P.toLowerCase())},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"tom",label:"Tom"}]})},A=w;return N.createElement(A)}}},4579:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9632\u6296\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002"]],"en-US":[["p","A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state."]]},meta:{order:12,title:{"zh-CN":"\u641C\u7D22\u7528\u6237","en-US":"Search and Select Users"},filename:"components/select/demo/select-users.md",id:"components-select-demo-select-users"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span><span class="token punctuation">,</span> Spin } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps } from <span class="token string">'antd/es/select'</span><span class="token comment" spellcheck="true">;</span>
import debounce from <span class="token string">'lodash/debounce'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useMemo<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

export interface DebounceSelectProps<span class="token operator">&lt;</span>ValueType <span class="token operator">=</span> any<span class="token operator">></span>
  extends Omit<span class="token operator">&lt;</span>SelectProps<span class="token operator">&lt;</span>ValueType | ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'options'</span> | <span class="token string">'children'</span><span class="token operator">></span> {
  fetchOptions<span class="token punctuation">:</span> <span class="token punctuation">(</span>search<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Promise<span class="token operator">&lt;</span>ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
  debounceTimeout<span class="token operator">?</span><span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>
}

function DebounceSelect<span class="token operator">&lt;</span>
  ValueType extends { key<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">; label: React.ReactNode; value: string | number } = any,</span>
<span class="token operator">></span><span class="token punctuation">(</span>{ fetchOptions<span class="token punctuation">,</span> debounceTimeout <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props }<span class="token punctuation">:</span> DebounceSelectProps<span class="token operator">&lt;</span>ValueType<span class="token operator">></span><span class="token punctuation">)</span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fetching<span class="token punctuation">,</span> setFetching<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> fetchRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> debounceFetcher <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> loadOptions <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      fetchRef<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
      <span class="token keyword">const</span> fetchId <span class="token operator">=</span> fetchRef<span class="token punctuation">.</span>current<span class="token comment" spellcheck="true">;</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

      <span class="token function">fetchOptions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>newOptions <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fetchId !<span class="token operator">==</span> fetchRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> {
          <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">for</span> fetch callback order
          return<span class="token comment" spellcheck="true">;</span>
        }

        <span class="token function">setOptions</span><span class="token punctuation">(</span>newOptions<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token comment" spellcheck="true">;</span>

    return <span class="token function">debounce</span><span class="token punctuation">(</span>loadOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      labelInValue
      filterOption<span class="token operator">=</span>{<span class="token boolean">false</span>}
      onSearch<span class="token operator">=</span>{debounceFetcher}
      notFoundContent<span class="token operator">=</span>{fetching <span class="token operator">?</span> <span class="token operator">&lt;</span>Spin size<span class="token operator">=</span><span class="token string">"small"</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token punctuation">:</span> <span class="token keyword">null</span>}
      {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props}
      options<span class="token operator">=</span>{options}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token operator">/</span><span class="token operator">/</span> Usage of DebounceSelect
interface UserValue {
  label<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  value<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
}

async function <span class="token function">fetchUserList</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span>UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetching user'</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://randomuser.me/api/?results=5'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=</span><span class="token operator">></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>body <span class="token operator">=</span><span class="token operator">></span>
      body<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>user<span class="token punctuation">:</span> { name<span class="token punctuation">:</span> { first<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">; last: string }; login: { username: string } }) => ({</span>
          label<span class="token punctuation">:</span> \`\${user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first} \${user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last}\`<span class="token punctuation">,</span>
          value<span class="token punctuation">:</span> user<span class="token punctuation">.</span>login<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
        }<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>DebounceSelect
      mode<span class="token operator">=</span><span class="token string">"multiple"</span>
      value<span class="token operator">=</span>{value}
      placeholder<span class="token operator">=</span><span class="token string">"Select users"</span>
      fetchOptions<span class="token operator">=</span>{fetchUserList}
      onChange<span class="token operator">=</span>{newValue <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token function">setValue</span><span class="token punctuation">(</span>newValue as UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }}
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/select'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash/debounce'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DebounceSelectProps</span><span class="token operator">&lt;</span>ValueType <span class="token operator">=</span> any<span class="token operator">></span>
  <span class="token keyword">extends</span> <span class="token class-name">Omit</span><span class="token operator">&lt;</span>SelectProps<span class="token operator">&lt;</span>ValueType <span class="token operator">|</span> ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'options'</span> <span class="token operator">|</span> <span class="token string">'children'</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fetchOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>search<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token operator">&lt;</span>ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">;</span>
  debounceTimeout<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> DebounceSelect<span class="token operator">&lt;</span>
  ValueType <span class="token keyword">extends</span> <span class="token punctuation">{</span> key<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span> label<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span> value<span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token punctuation">}</span> <span class="token operator">=</span> any<span class="token punctuation">,</span>
<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span> fetchOptions<span class="token punctuation">,</span> debounceTimeout <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token operator">:</span> DebounceSelectProps<span class="token operator">&lt;</span>ValueType<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fetching<span class="token punctuation">,</span> setFetching<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>ValueType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fetchRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> debounceFetcher <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loadOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fetchRef<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> fetchId <span class="token operator">=</span> fetchRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">fetchOptions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>newOptions <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fetchId <span class="token operator">!==</span> fetchRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// for fetch callback order</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">setOptions</span><span class="token punctuation">(</span>newOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">debounce</span><span class="token punctuation">(</span>loadOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">labelInValue</span>
      <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>debounceFetcher<span class="token punctuation">}</span></span>
      <span class="token attr-name">notFoundContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fetching <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Spin</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span>
      <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Usage of DebounceSelect</span>
<span class="token keyword">interface</span> <span class="token class-name">UserValue</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> string<span class="token punctuation">;</span>
  value<span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchUserList</span><span class="token punctuation">(</span>username<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetching user'</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://randomuser.me/api/?results=5'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>body <span class="token operator">=></span>
      body<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>user<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token punctuation">{</span> first<span class="token operator">:</span> string<span class="token punctuation">;</span> last<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span> login<span class="token operator">:</span> <span class="token punctuation">{</span> username<span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> user<span class="token punctuation">.</span>login<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DebounceSelect</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select users<span class="token punctuation">"</span></span>
      <span class="token attr-name">fetchOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fetchUserList<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>newValue <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setValue</span><span class="token punctuation">(</span>newValue <span class="token keyword">as</span> UserValue<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Spin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash/debounce'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DebounceSelect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> fetchOptions<span class="token punctuation">,</span> debounceTimeout <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fetching<span class="token punctuation">,</span> setFetching<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fetchRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> debounceFetcher <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loadOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fetchRef<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> fetchId <span class="token operator">=</span> fetchRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">fetchOptions</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fetchId <span class="token operator">!==</span> fetchRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// for fetch callback order</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">setOptions</span><span class="token punctuation">(</span>newOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setFetching</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">debounce</span><span class="token punctuation">(</span>loadOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchOptions<span class="token punctuation">,</span> debounceTimeout<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">labelInValue</span>
      <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>debounceFetcher<span class="token punctuation">}</span></span>
      <span class="token attr-name">notFoundContent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fetching <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Spin</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span>
      <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Usage of DebounceSelect</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchUserList</span><span class="token punctuation">(</span><span class="token parameter">username</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetching user'</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://randomuser.me/api/?results=5'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">body</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      body<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> user<span class="token punctuation">.</span>login<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DebounceSelect</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select users<span class="token punctuation">"</span></span>
      <span class="token attr-name">fetchOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fetchUserList<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setValue</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(e){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},h(e)}var u=a(12),r=b(a(156)),y=A(a(0)),R=["fetchOptions","debounceTimeout"];function w(e){if(typeof WeakMap!="function")return null;var m=new WeakMap,f=new WeakMap;return(w=function(z){return z?f:m})(e)}function A(e,m){if(!m&&e&&e.__esModule)return e;if(e===null||h(e)!=="object"&&typeof e!="function")return{default:e};var f=w(m);if(f&&f.has(e))return f.get(e);var j={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in e)if(V!=="default"&&Object.prototype.hasOwnProperty.call(e,V)){var q=z?Object.getOwnPropertyDescriptor(e,V):null;q&&(q.get||q.set)?Object.defineProperty(j,V,q):j[V]=e[V]}return j.default=e,f&&f.set(e,j),j}function b(e){return e&&e.__esModule?e:{default:e}}function d(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return e};var e={},m=Object.prototype,f=m.hasOwnProperty,j=Object.defineProperty||function(C,i,v){C[i]=v.value},z=typeof Symbol=="function"?Symbol:{},V=z.iterator||"@@iterator",q=z.asyncIterator||"@@asyncIterator",J=z.toStringTag||"@@toStringTag";function F(C,i,v){return Object.defineProperty(C,i,{value:v,enumerable:!0,configurable:!0,writable:!0}),C[i]}try{F({},"")}catch(C){F=function(v,D,E){return v[D]=E}}function K(C,i,v,D){var E=i&&i.prototype instanceof pn?i:pn,I=Object.create(E.prototype),H=new rn(D||[]);return j(I,"_invoke",{value:fn(C,v,H)}),I}function X(C,i,v){try{return{type:"normal",arg:C.call(i,v)}}catch(D){return{type:"throw",arg:D}}}e.wrap=K;var Y={};function pn(){}function _(){}function Q(){}var en={};F(en,V,function(){return this});var cn=Object.getPrototypeOf,on=cn&&cn(cn(gn([])));on&&on!==m&&f.call(on,V)&&(en=on);var nn=Q.prototype=pn.prototype=Object.create(en);function ln(C){["next","throw","return"].forEach(function(i){F(C,i,function(v){return this._invoke(i,v)})})}function un(C,i){function v(E,I,H,G){var Z=X(C[E],C,I);if(Z.type!=="throw"){var an=Z.arg,sn=an.value;return sn&&h(sn)=="object"&&f.call(sn,"__await")?i.resolve(sn.__await).then(function(tn){v("next",tn,H,G)},function(tn){v("throw",tn,H,G)}):i.resolve(sn).then(function(tn){an.value=tn,H(an)},function(tn){return v("throw",tn,H,G)})}G(Z.arg)}var D;j(this,"_invoke",{value:function(I,H){function G(){return new i(function(Z,an){v(I,H,Z,an)})}return D=D?D.then(G,G):G()}})}function fn(C,i,v){var D="suspendedStart";return function(E,I){if(D==="executing")throw new Error("Generator is already running");if(D==="completed"){if(E==="throw")throw I;return dn()}for(v.method=E,v.arg=I;;){var H=v.delegate;if(H){var G=mn(H,v);if(G){if(G===Y)continue;return G}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(D==="suspendedStart")throw D="completed",v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);D="executing";var Z=X(C,i,v);if(Z.type==="normal"){if(D=v.done?"completed":"suspendedYield",Z.arg===Y)continue;return{value:Z.arg,done:v.done}}Z.type==="throw"&&(D="completed",v.method="throw",v.arg=Z.arg)}}}function mn(C,i){var v=i.method,D=C.iterator[v];if(D===void 0)return i.delegate=null,v==="throw"&&C.iterator.return&&(i.method="return",i.arg=void 0,mn(C,i),i.method==="throw")||v!=="return"&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+v+"' method")),Y;var E=X(D,C.iterator,i.arg);if(E.type==="throw")return i.method="throw",i.arg=E.arg,i.delegate=null,Y;var I=E.arg;return I?I.done?(i[C.resultName]=I.value,i.next=C.nextLoc,i.method!=="return"&&(i.method="next",i.arg=void 0),i.delegate=null,Y):I:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,Y)}function hn(C){var i={tryLoc:C[0]};1 in C&&(i.catchLoc=C[1]),2 in C&&(i.finallyLoc=C[2],i.afterLoc=C[3]),this.tryEntries.push(i)}function kn(C){var i=C.completion||{};i.type="normal",delete i.arg,C.completion=i}function rn(C){this.tryEntries=[{tryLoc:"root"}],C.forEach(hn,this),this.reset(!0)}function gn(C){if(C){var i=C[V];if(i)return i.call(C);if(typeof C.next=="function")return C;if(!isNaN(C.length)){var v=-1,D=function E(){for(;++v<C.length;)if(f.call(C,v))return E.value=C[v],E.done=!1,E;return E.value=void 0,E.done=!0,E};return D.next=D}}return{next:dn}}function dn(){return{value:void 0,done:!0}}return _.prototype=Q,j(nn,"constructor",{value:Q,configurable:!0}),j(Q,"constructor",{value:_,configurable:!0}),_.displayName=F(Q,J,"GeneratorFunction"),e.isGeneratorFunction=function(C){var i=typeof C=="function"&&C.constructor;return!!i&&(i===_||(i.displayName||i.name)==="GeneratorFunction")},e.mark=function(C){return Object.setPrototypeOf?Object.setPrototypeOf(C,Q):(C.__proto__=Q,F(C,J,"GeneratorFunction")),C.prototype=Object.create(nn),C},e.awrap=function(C){return{__await:C}},ln(un.prototype),F(un.prototype,q,function(){return this}),e.AsyncIterator=un,e.async=function(C,i,v,D,E){E===void 0&&(E=Promise);var I=new un(K(C,i,v,D),E);return e.isGeneratorFunction(i)?I:I.next().then(function(H){return H.done?H.value:I.next()})},ln(nn),F(nn,J,"Generator"),F(nn,V,function(){return this}),F(nn,"toString",function(){return"[object Generator]"}),e.keys=function(C){var i=Object(C),v=[];for(var D in i)v.push(D);return v.reverse(),function E(){for(;v.length;){var I=v.pop();if(I in i)return E.value=I,E.done=!1,E}return E.done=!0,E}},e.values=gn,rn.prototype={constructor:rn,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(kn),!i)for(var v in this)v.charAt(0)==="t"&&f.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=void 0)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var v=this;function D(an,sn){return H.type="throw",H.arg=i,v.next=an,sn&&(v.method="next",v.arg=void 0),!!sn}for(var E=this.tryEntries.length-1;E>=0;--E){var I=this.tryEntries[E],H=I.completion;if(I.tryLoc==="root")return D("end");if(I.tryLoc<=this.prev){var G=f.call(I,"catchLoc"),Z=f.call(I,"finallyLoc");if(G&&Z){if(this.prev<I.catchLoc)return D(I.catchLoc,!0);if(this.prev<I.finallyLoc)return D(I.finallyLoc)}else if(G){if(this.prev<I.catchLoc)return D(I.catchLoc,!0)}else{if(!Z)throw new Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return D(I.finallyLoc)}}}},abrupt:function(i,v){for(var D=this.tryEntries.length-1;D>=0;--D){var E=this.tryEntries[D];if(E.tryLoc<=this.prev&&f.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var I=E;break}}I&&(i==="break"||i==="continue")&&I.tryLoc<=v&&v<=I.finallyLoc&&(I=null);var H=I?I.completion:{};return H.type=i,H.arg=v,I?(this.method="next",this.next=I.finallyLoc,Y):this.complete(H)},complete:function(i,v){if(i.type==="throw")throw i.arg;return i.type==="break"||i.type==="continue"?this.next=i.arg:i.type==="return"?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):i.type==="normal"&&v&&(this.next=v),Y},finish:function(i){for(var v=this.tryEntries.length-1;v>=0;--v){var D=this.tryEntries[v];if(D.finallyLoc===i)return this.complete(D.completion,D.afterLoc),kn(D),Y}},catch:function(i){for(var v=this.tryEntries.length-1;v>=0;--v){var D=this.tryEntries[v];if(D.tryLoc===i){var E=D.completion;if(E.type==="throw"){var I=E.arg;kn(D)}return I}}throw new Error("illegal catch attempt")},delegateYield:function(i,v,D){return this.delegate={iterator:gn(i),resultName:v,nextLoc:D},this.method==="next"&&(this.arg=void 0),Y}},e}function P(e,m,f,j,z,V,q){try{var J=e[V](q),F=J.value}catch(K){f(K);return}J.done?m(F):Promise.resolve(F).then(j,z)}function L(e){return function(){var m=this,f=arguments;return new Promise(function(j,z){var V=e.apply(m,f);function q(F){P(V,j,z,q,J,"next",F)}function J(F){P(V,j,z,q,J,"throw",F)}q(void 0)})}}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var m=1;m<arguments.length;m++){var f=arguments[m];for(var j in f)Object.prototype.hasOwnProperty.call(f,j)&&(e[j]=f[j])}return e},U.apply(this,arguments)}function M(e,m){return n(e)||p(e,m)||k(e,m)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e,m){if(e){if(typeof e=="string")return o(e,m);var f=Object.prototype.toString.call(e).slice(8,-1);if(f==="Object"&&e.constructor&&(f=e.constructor.name),f==="Map"||f==="Set")return Array.from(e);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return o(e,m)}}function o(e,m){(m==null||m>e.length)&&(m=e.length);for(var f=0,j=new Array(m);f<m;f++)j[f]=e[f];return j}function p(e,m){var f=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(f!=null){var j,z,V,q,J=[],F=!0,K=!1;try{if(V=(f=f.call(e)).next,m===0){if(Object(f)!==f)return;F=!1}else for(;!(F=(j=V.call(f)).done)&&(J.push(j.value),J.length!==m);F=!0);}catch(X){K=!0,z=X}finally{try{if(!F&&f.return!=null&&(q=f.return(),Object(q)!==q))return}finally{if(K)throw z}}return J}}function n(e){if(Array.isArray(e))return e}function l(e,m){if(e==null)return{};var f=s(e,m),j,z;if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(e);for(z=0;z<V.length;z++)j=V[z],!(m.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call(e,j)&&(f[j]=e[j])}return f}function s(e,m){if(e==null)return{};var f={},j=Object.keys(e),z,V;for(V=0;V<j.length;V++)z=j[V],!(m.indexOf(z)>=0)&&(f[z]=e[z]);return f}function t(e){var m=e.fetchOptions,f=e.debounceTimeout,j=f===void 0?800:f,z=l(e,R),V=(0,y.useState)(!1),q=M(V,2),J=q[0],F=q[1],K=(0,y.useState)([]),X=M(K,2),Y=X[0],pn=X[1],_=(0,y.useRef)(0),Q=(0,y.useMemo)(function(){var en=function(on){_.current+=1;var nn=_.current;pn([]),F(!0),m(on).then(function(ln){nn===_.current&&(pn(ln),F(!1))})};return(0,r.default)(en,j)},[m,j]);return y.default.createElement(u.Select,U({labelInValue:!0,filterOption:!1,onSearch:Q,notFoundContent:J?y.default.createElement(u.Spin,{size:"small"}):null},z,{options:Y}))}function c(e){return g.apply(this,arguments)}function g(){return g=L(d().mark(function e(m){return d().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return console.log("fetching user",m),j.abrupt("return",fetch("https://randomuser.me/api/?results=5").then(function(z){return z.json()}).then(function(z){return z.results.map(function(V){return{label:"".concat(V.name.first," ").concat(V.name.last),value:V.login.username}})}));case 2:case"end":return j.stop()}},e)})),g.apply(this,arguments)}var O=function(){var m=(0,y.useState)([]),f=M(m,2),j=f[0],z=f[1];return y.default.createElement(t,{mode:"multiple",value:j,placeholder:"Select users",fetchOptions:c,onChange:function(q){z(q)},style:{width:"100%"}})},T=O;return N.createElement(T)}}},4580:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A ",["code","large"]," \u548C ",["code","small"]," \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A ",["code","40px"]," \u548C ",["code","24px"]," \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A ",["code","32px"],"\u3002"]],"en-US":[["p","The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px."]]},meta:{order:3,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Sizes"},filename:"components/select/demo/size.md",id:"components-select-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Radio<span class="token punctuation">,</span> <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { SizeType } from <span class="token string">'antd/es/config-provider/SizeContext'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps<span class="token punctuation">,</span> RadioChangeEvent } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options<span class="token punctuation">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">10</span><span class="token comment" spellcheck="true">; i &lt; 36; i++) {</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    value<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string | string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`Selected<span class="token punctuation">:</span> \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SizeType<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'middle'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleSizeChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Group value<span class="token operator">=</span>{size} onChange<span class="token operator">=</span>{handleSizeChange}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"large"</span><span class="token operator">></span>Large<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"default"</span><span class="token operator">></span><span class="token keyword">Default</span><span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Button value<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>Small<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Group<span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        size<span class="token operator">=</span>{size}
        defaultValue<span class="token operator">=</span><span class="token string">"a1"</span>
        onChange<span class="token operator">=</span>{handleChange}
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">200</span> }}
        options<span class="token operator">=</span>{options}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        mode<span class="token operator">=</span><span class="token string">"multiple"</span>
        size<span class="token operator">=</span>{size}
        placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
        defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span>}
        onChange<span class="token operator">=</span>{handleChange}
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
        options<span class="token operator">=</span>{options}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Select</span>
        mode<span class="token operator">=</span><span class="token string">"tags"</span>
        size<span class="token operator">=</span>{size}
        placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
        defaultValue<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span>}
        onChange<span class="token operator">=</span>{handleChange}
        style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
        options<span class="token operator">=</span>{options}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SizeType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/config-provider/SizeContext'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps<span class="token punctuation">,</span> RadioChangeEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    value<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>SizeType<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'middle'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> RadioChangeEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSizeChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a1<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Radio<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'middle'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSizeChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Button</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a1<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'a10'</span><span class="token punctuation">,</span> <span class="token string">'c12'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43);function h(p){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(p)}var u=a(12),r=R(a(0));function y(p){if(typeof WeakMap!="function")return null;var n=new WeakMap,l=new WeakMap;return(y=function(t){return t?l:n})(p)}function R(p,n){if(!n&&p&&p.__esModule)return p;if(p===null||h(p)!=="object"&&typeof p!="function")return{default:p};var l=y(n);if(l&&l.has(p))return l.get(p);var s={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in p)if(c!=="default"&&Object.prototype.hasOwnProperty.call(p,c)){var g=t?Object.getOwnPropertyDescriptor(p,c):null;g&&(g.get||g.set)?Object.defineProperty(s,c,g):s[c]=p[c]}return s.default=p,l&&l.set(p,s),s}function w(p,n){return L(p)||P(p,n)||b(p,n)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(p,n){if(p){if(typeof p=="string")return d(p,n);var l=Object.prototype.toString.call(p).slice(8,-1);if(l==="Object"&&p.constructor&&(l=p.constructor.name),l==="Map"||l==="Set")return Array.from(p);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return d(p,n)}}function d(p,n){(n==null||n>p.length)&&(n=p.length);for(var l=0,s=new Array(n);l<n;l++)s[l]=p[l];return s}function P(p,n){var l=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(l!=null){var s,t,c,g,O=[],T=!0,e=!1;try{if(c=(l=l.call(p)).next,n===0){if(Object(l)!==l)return;T=!1}else for(;!(T=(s=c.call(l)).done)&&(O.push(s.value),O.length!==n);T=!0);}catch(m){e=!0,t=m}finally{try{if(!T&&l.return!=null&&(g=l.return(),Object(g)!==g))return}finally{if(e)throw t}}return O}}function L(p){if(Array.isArray(p))return p}for(var U=[],M=10;M<36;M++)U.push({value:M.toString(36)+M,label:M.toString(36)+M});var S=function(n){console.log("Selected: ".concat(n))},k=function(){var n=(0,r.useState)("middle"),l=w(n,2),s=l[0],t=l[1],c=function(O){t(O.target.value)};return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.Radio.Group,{value:s,onChange:c},r.default.createElement(u.Radio.Button,{value:"large"},"Large"),r.default.createElement(u.Radio.Button,{value:"default"},"Default"),r.default.createElement(u.Radio.Button,{value:"small"},"Small")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(u.Select,{size:s,defaultValue:"a1",onChange:S,style:{width:200},options:U}),r.default.createElement("br",null),r.default.createElement(u.Select,{mode:"multiple",size:s,placeholder:"Please select",defaultValue:["a10","c12"],onChange:S,style:{width:"100%"},options:U}),r.default.createElement("br",null),r.default.createElement(u.Select,{mode:"tags",size:s,placeholder:"Please select",defaultValue:["a10","c12"],onChange:S,style:{width:"100%"},options:U}))},o=k;return N.createElement(o)},style:`.code-box-demo .ant-select {
  margin: 0 8px 10px 0;
}

.ant-row-rtl .code-box-demo .ant-select {
  margin: 0 0 10px 8px;
}

#components-select-demo-search-box .code-box-demo .ant-select {
  margin: 0;
}`,highlightedStyle:`<span class="token selector"><span class="token class">.code-box-demo</span> <span class="token class">.ant-select</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">8</span>px <span class="token number">10</span>px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token class">.code-box-demo</span> <span class="token class">.ant-select</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">10</span>px <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token id">#components-select-demo-search-box</span> <span class="token class">.code-box-demo</span> <span class="token class">.ant-select</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4581:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","status"]," \u4E3A Select \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 ",["code","error"]," \u6216\u8005 ",["code","warning"],"\u3002"]],"en-US":[["p","Add status to Select with ",["code","status"],", which could be ",["code","error"]," or ",["code","warning"],"."]]},meta:{order:25,version:"4.19.0",title:{"zh-CN":"\u81EA\u5B9A\u4E49\u72B6\u6001","en-US":"Status"},filename:"components/select/demo/status.md",id:"components-select-demo-status"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span><span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span> status<span class="token operator">=</span><span class="token string">"error"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span> status<span class="token operator">=</span><span class="token string">"warning"</span> style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }} <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(w){return w&&w.__esModule?w:{default:w}}var y=function(){return u.default.createElement(h.Space,{direction:"vertical",style:{width:"100%"}},u.default.createElement(h.Select,{status:"error",style:{width:"100%"}}),u.default.createElement(h.Select,{status:"warning",style:{width:"100%"}}))},R=y;return N.createElement(R)},style:`#components-select-demo-status .ant-select {
  margin: 0;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-select-demo-status</span> <span class="token class">.ant-select</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4582:function(x,W,a){x.exports={content:{"zh-CN":[["p","\u57FA\u672C\u4F7F\u7528\u3002"]],"en-US":[["p","Basic Usage."]]},meta:{order:20,debug:!0,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},filename:"components/select/demo/suffix.md",id:"components-select-demo-suffix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { MehOutlined<span class="token punctuation">,</span> SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> smileIcon <span class="token operator">=</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> mehIcon <span class="token operator">=</span> <span class="token operator">&lt;</span>MehOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      suffixIcon<span class="token operator">=</span>{smileIcon}
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      onChange<span class="token operator">=</span>{handleChange}
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Select</span>
      suffixIcon<span class="token operator">=</span>{mehIcon}
      defaultValue<span class="token operator">=</span><span class="token string">"lucy"</span>
      style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token number">120</span> }}
      disabled
      options<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          value<span class="token punctuation">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> MehOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> smileIcon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mehIcon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>smileIcon<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
          disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mehIcon<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> MehOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> smileIcon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mehIcon <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>smileIcon<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'disabled'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Disabled'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Yiminghe'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'yiminghe'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mehIcon<span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'lucy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Lucy'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(61),u=a(12),r=y(a(0));function y(P){return P&&P.__esModule?P:{default:P}}var R=r.default.createElement(h.SmileOutlined,null),w=r.default.createElement(h.MehOutlined,null),A=function(L){console.log("selected ".concat(L))},b=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.Select,{suffixIcon:R,defaultValue:"lucy",style:{width:120},onChange:A,options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"disabled",label:"Disabled",disabled:!0},{value:"Yiminghe",label:"yiminghe"}]}),r.default.createElement(u.Select,{suffixIcon:w,defaultValue:"lucy",style:{width:120},disabled:!0,options:[{value:"lucy",label:"Lucy"}]}))},d=b;return N.createElement(d)}}},4583:function(x,W,a){x.exports={content:{"zh-CN":[["p","tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09\u3002"]],"en-US":[["p","Select with tags, transform input to tag (scroll the menu)."]]},meta:{order:4,title:{"zh-CN":"\u6807\u7B7E","en-US":"Tags"},filename:"components/select/demo/tags.md",id:"components-select-demo-tags"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { <span class="token keyword">Select</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import type { SelectProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> options<span class="token punctuation">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">10</span><span class="token comment" spellcheck="true">; i &lt; 36; i++) {</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    value<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\`selected \${value}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token keyword">Select</span>
    mode<span class="token operator">=</span><span class="token string">"tags"</span>
    style<span class="token operator">=</span>{{ width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
    placeholder<span class="token operator">=</span><span class="token string">"Tags Mode"</span>
    onChange<span class="token operator">=</span>{handleChange}
    options<span class="token operator">=</span>{options}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SelectProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">'options'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    value<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    label<span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Tags Mode<span class="token punctuation">"</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tags<span class="token punctuation">"</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Tags Mode<span class="token punctuation">"</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var N=a(0),$=a(43),h=a(12),u=r(a(0));function r(d){return d&&d.__esModule?d:{default:d}}for(var y=[],R=10;R<36;R++)y.push({value:R.toString(36)+R,label:R.toString(36)+R});var w=function(P){console.log("selected ".concat(P))},A=function(){return u.default.createElement(h.Select,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:w,options:y})},b=A;return N.createElement(b)}}}}]);
