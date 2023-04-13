(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{3916:function(j,Q,l){j.exports={"basic-controlled":l(4763),basic:l(4764),"big-data":l(4765),"customized-icon":l(4766),directory:l(4767),"drag-debug":l(4768),draggable:l(4769),dynamic:l(4770),line:l(4771),search:l(4772),"switcher-icon":l(4773),"virtual-scroll":l(4774)}},4763:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B"]],"en-US":[["p","Controlled mode lets parent nodes reflect the status of child nodes more intelligently."]]},meta:{order:1,title:{"zh-CN":"\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B","en-US":"Controlled Tree"},filename:"components/tree/demo/basic-controlled.md",id:"components-tree-demo-basic-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">if</span> <span class="token operator">not</span> set autoExpandParent <span class="token keyword">to</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">if</span> children expanded<span class="token punctuation">,</span> parent can <span class="token operator">not</span> collapse<span class="token punctuation">.</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span><span class="token punctuation">,</span> you can remove all expanded children keys<span class="token punctuation">.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      onExpand<span class="token operator">=</span>{onExpand}
      expandedKeys<span class="token operator">=</span>{expandedKeys}
      autoExpandParent<span class="token operator">=</span>{autoExpandParent}
      onCheck<span class="token operator">=</span>{onCheck}
      checkedKeys<span class="token operator">=</span>{checkedKeys}
      onSelect<span class="token operator">=</span>{onSelect}
      selectedKeys<span class="token operator">=</span>{selectedKeys}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>expandedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">expandedKeysValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeysValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeysValue<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43);function h(d){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(d)}var b=l(12),g=D(l(0));function i(d){if(typeof WeakMap!="function")return null;var o=new WeakMap,u=new WeakMap;return(i=function(x){return x?u:o})(d)}function D(d,o){if(!o&&d&&d.__esModule)return d;if(d===null||h(d)!=="object"&&typeof d!="function")return{default:d};var u=i(o);if(u&&u.has(d))return u.get(d);var y={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in d)if(P!=="default"&&Object.prototype.hasOwnProperty.call(d,P)){var t=x?Object.getOwnPropertyDescriptor(d,P):null;t&&(t.get||t.set)?Object.defineProperty(y,P,t):y[P]=d[P]}return y.default=d,u&&u.set(d,y),y}function T(d,o){return z(d)||N(d,o)||S(d,o)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(d,o){if(d){if(typeof d=="string")return A(d,o);var u=Object.prototype.toString.call(d).slice(8,-1);if(u==="Object"&&d.constructor&&(u=d.constructor.name),u==="Map"||u==="Set")return Array.from(d);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return A(d,o)}}function A(d,o){(o==null||o>d.length)&&(o=d.length);for(var u=0,y=new Array(o);u<o;u++)y[u]=d[u];return y}function N(d,o){var u=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(u!=null){var y,x,P,t,e=[],n=!0,s=!1;try{if(P=(u=u.call(d)).next,o===0){if(Object(u)!==u)return;n=!1}else for(;!(n=(y=P.call(u)).done)&&(e.push(y.value),e.length!==o);n=!0);}catch(a){s=!0,x=a}finally{try{if(!n&&u.return!=null&&(t=u.return(),Object(t)!==t))return}finally{if(s)throw x}}return e}}function z(d){if(Array.isArray(d))return d}var I=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],R=function(){var o=(0,g.useState)(["0-0-0","0-0-1"]),u=T(o,2),y=u[0],x=u[1],P=(0,g.useState)(["0-0-0"]),t=T(P,2),e=t[0],n=t[1],s=(0,g.useState)([]),a=T(s,2),k=a[0],v=a[1],m=(0,g.useState)(!0),w=T(m,2),O=w[0],E=w[1],p=function(L){console.log("onExpand",L),x(L),E(!1)},c=function(L){console.log("onCheck",L),n(L)},r=function(L,W){console.log("onSelect",W),v(L)};return g.default.createElement(b.Tree,{checkable:!0,onExpand:p,expandedKeys:y,autoExpandParent:O,onCheck:c,checkedKeys:e,onSelect:r,selectedKeys:k,treeData:I})},Y=R;return M.createElement(Y)}}},4764:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002"]],"en-US":[["p","The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/tree/demo/basic.md",id:"components-tree-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#1890ff'</span> }}<span class="token operator">></span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onCheck'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultCheckedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      onSelect<span class="token operator">=</span>{onSelect}
      onCheck<span class="token operator">=</span>{onCheck}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#1890ff'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onCheck<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onCheck'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">disableCheckbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#1890ff'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                sss
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(12),b=g(l(0));function g(C){return C&&C.__esModule?C:{default:C}}var i=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:b.default.createElement("span",{style:{color:"#1890ff"}},"sss"),key:"0-0-1-0"}]}]}],D=function(){var S=function(z,I){console.log("selected",z,I)},A=function(z,I){console.log("onCheck",z,I)};return b.default.createElement(h.Tree,{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:S,onCheck:A,treeData:i})},T=D;return M.createElement(T)}}},4765:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u5927\u6570\u636E\u5C55\u793A\u3002"]],"en-US":[["p","Plenty of tree nodes."]]},meta:{order:99,title:{"zh-CN":"\u5927\u6570\u636E","en-US":"Big data"},debug:!0,filename:"components/tree/demo/big-data.md",id:"components-tree-demo-big-data"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; 100; i += 1) {</span>
  <span class="token keyword">const</span> children<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>let j <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; j &lt; 100; j += 1) {</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
      title<span class="token punctuation">:</span> \`child \${i}<span class="token operator">-</span>\${j}\`<span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> \`l<span class="token operator">-</span>\${i}<span class="token operator">-</span>\${j}\`<span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    title<span class="token punctuation">:</span> \`parent \${i}\`<span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> \`l<span class="token operator">-</span>\${i}\`<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tree defaultExpandAll height<span class="token operator">=</span>{<span class="token number">400</span>} treeData<span class="token operator">=</span>{treeData} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(12),b=g(l(0));function g(N){return N&&N.__esModule?N:{default:N}}for(var i=[],D=0;D<100;D+=1){for(var T=[],C=0;C<100;C+=1)T.push({title:"child ".concat(D,"-").concat(C),key:"l-".concat(D,"-").concat(C)});i.push({title:"parent ".concat(D),key:"l-".concat(D),children:T})}var S=function(){return b.default.createElement(h.Tree,{defaultExpandAll:!0,height:400,treeData:i})},A=S;return M.createElement(A)}}},4766:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002"]],"en-US":[["p","You can customize icons for different nodes."]]},meta:{order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"},filename:"components/tree/demo/customized-icon.md",id:"components-tree-demo-customized-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
} from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>MehOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token punctuation">(</span>{ selected }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token operator">&lt;</span>FrownFilled <span class="token operator">/</span><span class="token operator">></span> <span class="token punctuation">:</span> <span class="token operator">&lt;</span>FrownOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
    switcherIcon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
    treeData<span class="token operator">=</span>{treeData}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">icon</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> selected <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownFilled</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">icon</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> selected <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownFilled</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(61),b=l(12),g=i(l(0));function i(S){return S&&S.__esModule?S:{default:S}}var D=[{title:"parent 1",key:"0-0",icon:g.default.createElement(h.SmileOutlined,null),children:[{title:"leaf",key:"0-0-0",icon:g.default.createElement(h.MehOutlined,null)},{title:"leaf",key:"0-0-1",icon:function(A){var N=A.selected;return N?g.default.createElement(h.FrownFilled,null):g.default.createElement(h.FrownOutlined,null)}}]}],T=function(){return g.default.createElement(b.Tree,{showIcon:!0,defaultExpandAll:!0,defaultSelectedKeys:["0-0-0"],switcherIcon:g.default.createElement(h.DownOutlined,null),treeData:D})},C=T;return M.createElement(C)}}},4767:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C",["code","multiple"]," \u6A21\u5F0F\u652F\u6301 ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," \u590D\u9009\u3002"]],"en-US":[["p","Built-in directory tree. ",["code","multiple"]," support ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," selection."]]},meta:{order:7,title:{"zh-CN":"\u76EE\u5F55","en-US":"directory"},filename:"components/tree/demo/directory.md",id:"components-tree-demo-directory"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> DirectoryTreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { DirectoryTree } <span class="token operator">=</span> Tree<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand<span class="token punctuation">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onExpand'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>DirectoryTree
      multiple
      defaultExpandAll
      onSelect<span class="token operator">=</span>{onSelect}
      onExpand<span class="token operator">=</span>{onExpand}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> DirectoryTreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onExpand<span class="token operator">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onExpand'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(12),b=g(l(0));function g(S){return S&&S.__esModule?S:{default:S}}var i=h.Tree.DirectoryTree,D=[{title:"parent 0",key:"0-0",children:[{title:"leaf 0-0",key:"0-0-0",isLeaf:!0},{title:"leaf 0-1",key:"0-0-1",isLeaf:!0}]},{title:"parent 1",key:"0-1",children:[{title:"leaf 1-0",key:"0-1-0",isLeaf:!0},{title:"leaf 1-1",key:"0-1-1",isLeaf:!0}]}],T=function(){var A=function(I,R){console.log("Trigger Select",I,R)},N=function(I,R){console.log("Trigger Expand",I,R)};return b.default.createElement(i,{multiple:!0,defaultExpandAll:!0,onSelect:A,onExpand:N,treeData:D})},C=T;return M.createElement(C)}}},4768:function(j,Q,l){j.exports={content:[],meta:{order:98,title:{"zh-CN":"Drag Debug","en-US":"Drag Debug"},debug:!0,filename:"components/tree/demo/drag-debug.md",id:"components-tree-demo-drag-debug"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarryOutOutlined</span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDragEnter <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment" spellcheck="true">// this.setState({</span>
    <span class="token comment" spellcheck="true">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment" spellcheck="true">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDrop <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment" spellcheck="true">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLine <span class="token operator">=</span> showLine <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        showLine<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowIcon <span class="token operator">=</span> showIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLeafIcon <span class="token operator">=</span> showLeafIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          showLine<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showLeafIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    <span class="token literal-property property">expandedKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// this.setState({</span>
    <span class="token comment">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">gData</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLine</span> <span class="token operator">=</span> <span class="token parameter">showLine</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowIcon</span> <span class="token operator">=</span> <span class="token parameter">showIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLeafIcon</span> <span class="token operator">=</span> <span class="token parameter">showLeafIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`},preview:function(){var M=l(0),q=l(43),h=i(l(0)),b=l(12),g=l(61);function i(p){return p&&p.__esModule?p:{default:p}}function D(p){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},D(p)}function T(p){return N(p)||A(p)||S(p)||C()}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(p,c){if(p){if(typeof p=="string")return z(p,c);var r=Object.prototype.toString.call(p).slice(8,-1);if(r==="Object"&&p.constructor&&(r=p.constructor.name),r==="Map"||r==="Set")return Array.from(p);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(p,c)}}function A(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function N(p){if(Array.isArray(p))return z(p)}function z(p,c){(c==null||c>p.length)&&(c=p.length);for(var r=0,f=new Array(c);r<c;r++)f[r]=p[r];return f}function I(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")}function R(p,c){for(var r=0;r<c.length;r++){var f=c[r];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,n(f.key),f)}}function Y(p,c,r){return c&&R(p.prototype,c),r&&R(p,r),Object.defineProperty(p,"prototype",{writable:!1}),p}function d(p,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(c&&c.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),Object.defineProperty(p,"prototype",{writable:!1}),c&&o(p,c)}function o(p,c){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,L){return f.__proto__=L,f},o(p,c)}function u(p){var c=P();return function(){var f=t(p),L;if(c){var W=t(this).constructor;L=Reflect.construct(f,arguments,W)}else L=f.apply(this,arguments);return y(this,L)}}function y(p,c){if(c&&(D(c)==="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(p)}function x(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function P(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(p){return!1}}function t(p){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},t(p)}function e(p,c,r){return c=n(c),c in p?Object.defineProperty(p,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):p[c]=r,p}function n(p){var c=s(p,"string");return D(c)==="symbol"?c:String(c)}function s(p,c){if(D(p)!=="object"||p===null)return p;var r=p[Symbol.toPrimitive];if(r!==void 0){var f=r.call(p,c||"default");if(D(f)!=="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(p)}var a=3,k=2,v=1,m=[],w=function p(c,r,f){for(var L=r||"0",W=f||m,H=[],K=0;K<a;K++){var U="".concat(L,"-").concat(K);W.push({title:U,key:U,icon:h.default.createElement(g.CarryOutOutlined,null)}),K<k&&H.push(U)}if(c<0)return W;var G=c-1;H.forEach(function(B,$){return W[$].children=[],p(G,B,W[$].children)})};w(v);var O=function(p){d(r,p);var c=u(r);function r(){var f;I(this,r);for(var L=arguments.length,W=new Array(L),H=0;H<L;H++)W[H]=arguments[H];return f=c.call.apply(c,[this].concat(W)),e(x(f),"state",{gData:m,expandedKeys:["0-0","0-0-0","0-0-0-0"],showLine:!0,showIcon:!0,showLeafIcon:!0}),e(x(f),"onDragEnter",function(K){console.log(K)}),e(x(f),"onDrop",function(K){console.log(K);var U=K.node.key,G=K.dragNode.key,B=K.node.pos.split("-"),$=K.dropPosition-Number(B[B.length-1]),F=function X(nn,tn,pn){for(var an=0;an<nn.length;an++){if(nn[an].key===tn)return pn(nn[an],an,nn);nn[an].children&&X(nn[an].children,tn,pn)}},V=T(f.state.gData),J;if(F(V,G,function(X,nn,tn){tn.splice(nn,1),J=X}),!K.dropToGap)F(V,U,function(X){X.children=X.children||[],X.children.push(J)});else if((K.node.props.children||[]).length>0&&K.node.props.expanded&&$===1)F(V,U,function(X){X.children=X.children||[],X.children.unshift(J)});else{var sn,_;F(V,U,function(X,nn,tn){sn=tn,_=nn}),$===-1?sn.splice(_,0,J):sn.splice(_+1,0,J)}f.setState({gData:V})}),e(x(f),"setShowLine",function(K){var U=f.state.showLeafIcon;K?U?f.setState({showLine:{showLeafIcon:!0}}):f.setState({showLine:!0}):f.setState({showLine:!1})}),e(x(f),"setShowIcon",function(K){f.setState({showIcon:K})}),e(x(f),"setShowLeafIcon",function(K){f.setState({showLeafIcon:K,showLine:{showLeafIcon:K}})}),f}return Y(r,[{key:"render",value:function(){var L=this.state,W=L.showLine,H=L.showIcon,K=L.showLeafIcon,U=L.expandedKeys,G=this.setShowLine,B=this.setShowIcon,$=this.setShowLeafIcon;return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{style:{marginBottom:16}},"showLine: ",h.default.createElement(b.Switch,{checked:W,onChange:G}),h.default.createElement("br",null),h.default.createElement("br",null),"showIcon: ",h.default.createElement(b.Switch,{checked:H,onChange:B}),h.default.createElement("br",null),h.default.createElement("br",null),"showLeafIcon: ",h.default.createElement(b.Switch,{checked:K,onChange:$})),h.default.createElement(b.Tree,{showLine:W,showIcon:H,className:"draggable-tree",defaultExpandedKeys:U,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop,treeData:this.state.gData}))}}]),r}(h.default.Component),E=O;return M.createElement(E)}}},4769:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002"]],"en-US":[["p","Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."]]},meta:{order:2,title:{"zh-CN":"\u62D6\u52A8\u793A\u4F8B","en-US":"draggable"},filename:"components/tree/demo/draggable.md",id:"components-tree-demo-draggable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> defaultData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey || <span class="token string">'0'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns || defaultData<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; x; i++) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${preKey}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> {
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> {
    return tns<span class="token comment" spellcheck="true">;</span>
  }
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    return <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onDragEnter<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDragEnter'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>expandedKeys<span class="token punctuation">)</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onDrop<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDrop'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>
      data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
      callback<span class="token punctuation">:</span> <span class="token punctuation">(</span>node<span class="token punctuation">:</span> DataNode<span class="token punctuation">,</span> i<span class="token punctuation">:</span> number<span class="token punctuation">,</span> data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> void<span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; data.length; i++) {</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span> {
          return <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children!<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
      }
    }<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

    <span class="token operator">/</span><span class="token operator">/</span> Find dragObject
    let dragObj<span class="token punctuation">:</span> DataNode<span class="token comment" spellcheck="true">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      dragObj <span class="token operator">=</span> item<span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>!info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> {
      <span class="token operator">/</span><span class="token operator">/</span> Drop on the content
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> {
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> where <span class="token keyword">to</span> insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>node as any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token operator">/</span><span class="token operator">/</span> Has children
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node as any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token operator">/</span><span class="token operator">/</span> Is expanded
      dropPosition <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span><span class="token operator">/</span> On the bottom gap
    <span class="token punctuation">)</span> {
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> {
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> where <span class="token keyword">to</span> insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">in</span> previous version<span class="token punctuation">,</span> we use item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span> <span class="token keyword">to</span> insert the
        <span class="token operator">/</span><span class="token operator">/</span> item <span class="token keyword">to</span> the tail of the children
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> {
      let ar<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
      let i<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        ar <span class="token operator">=</span> arr<span class="token comment" spellcheck="true">;</span>
        i <span class="token operator">=</span> index<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> {
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i!<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj!<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      } <span class="token keyword">else</span> {
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i! <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj!<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }
    }
    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      className<span class="token operator">=</span><span class="token string">"draggable-tree"</span>
      defaultExpandedKeys<span class="token operator">=</span>{expandedKeys}
      draggable
      blockNode
      onDragEnter<span class="token operator">=</span>{onDragEnter}
      onDrop<span class="token operator">=</span>{onDrop}
      treeData<span class="token operator">=</span>{gData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token operator">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onDragEnter<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDragEnter'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// setExpandedKeys(info.expandedKeys)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onDrop<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDrop'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
      data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
      <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> DataNode<span class="token punctuation">,</span> i<span class="token operator">:</span> number<span class="token punctuation">,</span> data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token operator">!</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token operator">:</span> DataNode<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>node <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token operator">:</span> number<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">!</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">draggable</span>
      <span class="token attr-name">blockNode</span>
      <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDragEnter<span class="token punctuation">}</span></span>
      <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDrop<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// setExpandedKeys(info.expandedKeys)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">draggable</span>
      <span class="token attr-name">blockNode</span>
      <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDragEnter<span class="token punctuation">}</span></span>
      <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDrop<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43);function h(n){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},h(n)}var b=l(12),g=D(l(0));function i(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(i=function(v){return v?a:s})(n)}function D(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||h(n)!=="object"&&typeof n!="function")return{default:n};var a=i(s);if(a&&a.has(n))return a.get(n);var k={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var w=v?Object.getOwnPropertyDescriptor(n,m):null;w&&(w.get||w.set)?Object.defineProperty(k,m,w):k[m]=n[m]}return k.default=n,a&&a.set(n,k),k}function T(n){return A(n)||S(n)||I(n)||C()}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function A(n){if(Array.isArray(n))return R(n)}function N(n,s){return d(n)||Y(n,s)||I(n,s)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(n,s){if(n){if(typeof n=="string")return R(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(n,s)}}function R(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,k=new Array(s);a<s;a++)k[a]=n[a];return k}function Y(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var k,v,m,w,O=[],E=!0,p=!1;try{if(m=(a=a.call(n)).next,s===0){if(Object(a)!==a)return;E=!1}else for(;!(E=(k=m.call(a)).done)&&(O.push(k.value),O.length!==s);E=!0);}catch(c){p=!0,v=c}finally{try{if(!E&&a.return!=null&&(w=a.return(),Object(w)!==w))return}finally{if(p)throw v}}return O}}function d(n){if(Array.isArray(n))return n}var o=3,u=2,y=1,x=[],P=function n(s,a,k){for(var v=a||"0",m=k||x,w=[],O=0;O<o;O++){var E="".concat(v,"-").concat(O);m.push({title:E,key:E}),O<u&&w.push(E)}if(s<0)return m;var p=s-1;w.forEach(function(c,r){return m[r].children=[],n(p,c,m[r].children)})};P(y);var t=function(){var s=(0,g.useState)(x),a=N(s,2),k=a[0],v=a[1],m=(0,g.useState)(["0-0","0-0-0","0-0-0-0"]),w=N(m,1),O=w[0],E=function(r){console.log(r)},p=function(r){console.log(r);var f=r.node.key,L=r.dragNode.key,W=r.node.pos.split("-"),H=r.dropPosition-Number(W[W.length-1]),K=function F(V,J,sn){for(var _=0;_<V.length;_++){if(V[_].key===J)return sn(V[_],_,V);V[_].children&&F(V[_].children,J,sn)}},U=T(k),G;if(K(U,L,function(F,V,J){J.splice(V,1),G=F}),!r.dropToGap)K(U,f,function(F){F.children=F.children||[],F.children.unshift(G)});else if((r.node.props.children||[]).length>0&&r.node.props.expanded&&H===1)K(U,f,function(F){F.children=F.children||[],F.children.unshift(G)});else{var B=[],$;K(U,f,function(F,V,J){B=J,$=V}),H===-1?B.splice($,0,G):B.splice($+1,0,G)}v(U)};return g.default.createElement(b.Tree,{className:"draggable-tree",defaultExpandedKeys:O,draggable:!0,blockNode:!0,onDragEnter:E,onDrop:p,treeData:k})},e=t;return M.createElement(e)}}},4770:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002"]],"en-US":[["p","To load data asynchronously when click to expand a treeNode."]]},meta:{order:3,title:{"zh-CN":"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D","en-US":"load data asynchronously"},filename:"components/tree/demo/dynamic.md",id:"components-tree-demo-dynamic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

interface DataNode {
  title<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  key<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  isLeaf<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token comment" spellcheck="true">;</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> initTreeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'1'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token operator">/</span><span class="token operator">/</span> It's just a simple demo<span class="token punctuation">.</span> You can use tree map <span class="token keyword">to</span> optimize update perf<span class="token punctuation">.</span>
<span class="token keyword">const</span> updateTreeData <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    }
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    }
    return node<span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onLoadData <span class="token operator">=</span> <span class="token punctuation">(</span>{ key<span class="token punctuation">,</span> children }<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
    new Promise<span class="token operator">&lt;</span>void<span class="token operator">></span><span class="token punctuation">(</span>resolve <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> {
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        return<span class="token comment" spellcheck="true">;</span>
      }
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>origin <span class="token operator">=</span><span class="token operator">></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">0</span>\` }<span class="token punctuation">,</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">1</span>\` }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token operator">&lt;</span>Tree loadData<span class="token operator">=</span>{onLoadData} treeData<span class="token operator">=</span>{treeData} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">DataNode</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> string<span class="token punctuation">;</span>
  key<span class="token operator">:</span> string<span class="token punctuation">;</span>
  isLeaf<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> initTreeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>
<span class="token keyword">const</span> updateTreeData <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>origin <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> initTreeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateTreeData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onLoadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(12),b=i(l(0));function g(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(g=function(a){return a?n:e})(t)}function i(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||D(t)!=="object"&&typeof t!="function")return{default:t};var n=g(e);if(n&&n.has(t))return n.get(t);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in t)if(k!=="default"&&Object.prototype.hasOwnProperty.call(t,k)){var v=a?Object.getOwnPropertyDescriptor(t,k):null;v&&(v.get||v.set)?Object.defineProperty(s,k,v):s[k]=t[k]}return s.default=t,n&&n.set(t,s),s}function D(t){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function T(t,e){return z(t)||N(t,e)||S(t,e)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t,e){if(t){if(typeof t=="string")return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function N(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s,a,k,v,m=[],w=!0,O=!1;try{if(k=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;w=!1}else for(;!(w=(s=k.call(n)).done)&&(m.push(s.value),m.length!==e);w=!0);}catch(E){O=!0,a=E}finally{try{if(!w&&n.return!=null&&(v=n.return(),Object(v)!==v))return}finally{if(O)throw a}}return m}}function z(t){if(Array.isArray(t))return t}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,s)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I(Object(n),!0).forEach(function(s){Y(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Y(t,e,n){return e=d(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=o(t,"string");return D(e)==="symbol"?e:String(e)}function o(t,e){if(D(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(D(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var u=[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}],y=function t(e,n,s){return e.map(function(a){return a.key===n?R(R({},a),{},{children:s}):a.children?R(R({},a),{},{children:t(a.children,n,s)}):a})},x=function(){var e=(0,b.useState)(u),n=T(e,2),s=n[0],a=n[1],k=function(m){var w=m.key,O=m.children;return new Promise(function(E){if(O){E();return}setTimeout(function(){a(function(p){return y(p,w,[{title:"Child Node",key:"".concat(w,"-0")},{title:"Child Node",key:"".concat(w,"-1")}])}),E()},1e3)})};return b.default.createElement(h.Tree,{loadData:k,treeData:s})},P=x;return M.createElement(P)}}},4771:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u8282\u70B9\u4E4B\u95F4\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\uFF0C\u5E38\u7528\u4E8E\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5C55\u793A\u3002\u4F7F\u7528 ",["code","showLine"]," \u5F00\u542F\uFF0C\u53EF\u4EE5\u7528 ",["code","switcherIcon"]," \u4FEE\u6539\u9ED8\u8BA4\u56FE\u6807\u3002"]],"en-US":[["p","Tree with connected line between nodes, turn on by ",["code","showLine"],", customize the preseted icon by ",["code","switcherIcon"],"."]]},meta:{order:5,title:{"zh-CN":"\u8FDE\u63A5\u7EBF","en-US":"Tree with line"},filename:"components/tree/demo/line.md",id:"components-tree-demo-line"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { CarryOutOutlined<span class="token punctuation">,</span> CheckOutlined<span class="token punctuation">,</span> FormOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { <span class="token keyword">Select</span><span class="token punctuation">,</span> <span class="token keyword">Switch</span><span class="token punctuation">,</span> Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
            switcherIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>FormOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean | React<span class="token punctuation">.</span>ReactNode<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleLeafIconChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token string">'true'</span> | <span class="token string">'false'</span> | <span class="token string">'custom'</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">'custom'</span><span class="token punctuation">)</span> {
      return <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>CheckOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }

    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">'true'</span><span class="token punctuation">)</span> {
      return <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }

    return <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> }}<span class="token operator">></span>
        showLine<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{!!showLine} onChange<span class="token operator">=</span>{setShowLine} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{showIcon} onChange<span class="token operator">=</span>{setShowIcon} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showLeafIcon<span class="token punctuation">:</span>{<span class="token string">' '</span>}
        <span class="token operator">&lt;</span><span class="token keyword">Select</span> defaultValue<span class="token operator">=</span><span class="token string">"true"</span> onChange<span class="token operator">=</span>{handleLeafIconChange}<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option value<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token boolean">True</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option value<span class="token operator">=</span><span class="token string">"false"</span><span class="token operator">></span><span class="token boolean">False</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option value<span class="token operator">=</span><span class="token string">"custom"</span><span class="token operator">></span>Custom icon<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">Select</span><span class="token punctuation">.</span>Option<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">Select</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Tree
        showLine<span class="token operator">=</span>{showLine <span class="token operator">?</span> { showLeafIcon } <span class="token punctuation">:</span> <span class="token boolean">false</span>}
        showIcon<span class="token operator">=</span>{showIcon}
        defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
        onSelect<span class="token operator">=</span>{onSelect}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> CheckOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            switcherIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean <span class="token operator">|</span> React<span class="token punctuation">.</span>ReactNode<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleLeafIconChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token string">'true'</span> <span class="token operator">|</span> <span class="token string">'false'</span> <span class="token operator">|</span> <span class="token string">'custom'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">'custom'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CheckOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">'true'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        showLine<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showLeafIcon<span class="token operator">:</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleLeafIconChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>True<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>False<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine <span class="token operator">?</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> CheckOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">switcherIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleLeafIconChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">'custom'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CheckOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">'true'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleLeafIconChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>True<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>False<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select.Option</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select.Option</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Select</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          showLine
            <span class="token operator">?</span> <span class="token punctuation">{</span>
                showLeafIcon<span class="token punctuation">,</span>
              <span class="token punctuation">}</span>
            <span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43);function h(o){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},h(o)}var b=l(61),g=l(12),i=T(l(0));function D(o){if(typeof WeakMap!="function")return null;var u=new WeakMap,y=new WeakMap;return(D=function(P){return P?y:u})(o)}function T(o,u){if(!u&&o&&o.__esModule)return o;if(o===null||h(o)!=="object"&&typeof o!="function")return{default:o};var y=D(u);if(y&&y.has(o))return y.get(o);var x={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in o)if(t!=="default"&&Object.prototype.hasOwnProperty.call(o,t)){var e=P?Object.getOwnPropertyDescriptor(o,t):null;e&&(e.get||e.set)?Object.defineProperty(x,t,e):x[t]=o[t]}return x.default=o,y&&y.set(o,x),x}function C(o,u){return I(o)||z(o,u)||A(o,u)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(o,u){if(o){if(typeof o=="string")return N(o,u);var y=Object.prototype.toString.call(o).slice(8,-1);if(y==="Object"&&o.constructor&&(y=o.constructor.name),y==="Map"||y==="Set")return Array.from(o);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return N(o,u)}}function N(o,u){(u==null||u>o.length)&&(u=o.length);for(var y=0,x=new Array(u);y<u;y++)x[y]=o[y];return x}function z(o,u){var y=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(y!=null){var x,P,t,e,n=[],s=!0,a=!1;try{if(t=(y=y.call(o)).next,u===0){if(Object(y)!==y)return;s=!1}else for(;!(s=(x=t.call(y)).done)&&(n.push(x.value),n.length!==u);s=!0);}catch(k){a=!0,P=k}finally{try{if(!s&&y.return!=null&&(e=y.return(),Object(e)!==e))return}finally{if(a)throw P}}return n}}function I(o){if(Array.isArray(o))return o}var R=[{title:"parent 1",key:"0-0",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"parent 1-0",key:"0-0-0",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-0-0",icon:i.default.createElement(b.CarryOutOutlined,null)},{title:i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,"multiple line title"),i.default.createElement("div",null,"multiple line title")),key:"0-0-0-1",icon:i.default.createElement(b.CarryOutOutlined,null)},{title:"leaf",key:"0-0-0-2",icon:i.default.createElement(b.CarryOutOutlined,null)}]},{title:"parent 1-1",key:"0-0-1",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-1-0",icon:i.default.createElement(b.CarryOutOutlined,null)}]},{title:"parent 1-2",key:"0-0-2",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-2-0",icon:i.default.createElement(b.CarryOutOutlined,null)},{title:"leaf",key:"0-0-2-1",icon:i.default.createElement(b.CarryOutOutlined,null),switcherIcon:i.default.createElement(b.FormOutlined,null)}]}]},{title:"parent 2",key:"0-1",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"parent 2-0",key:"0-1-0",icon:i.default.createElement(b.CarryOutOutlined,null),children:[{title:"leaf",key:"0-1-0-0",icon:i.default.createElement(b.CarryOutOutlined,null)},{title:"leaf",key:"0-1-0-1",icon:i.default.createElement(b.CarryOutOutlined,null)}]}]}],Y=function(){var u=(0,i.useState)(!0),y=C(u,2),x=y[0],P=y[1],t=(0,i.useState)(!1),e=C(t,2),n=e[0],s=e[1],a=(0,i.useState)(!0),k=C(a,2),v=k[0],m=k[1],w=function(p,c){console.log("selected",p,c)},O=function(p){return m(p==="custom"?i.default.createElement(b.CheckOutlined,null):p==="true")};return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:16}},"showLine: ",i.default.createElement(g.Switch,{checked:!!x,onChange:P}),i.default.createElement("br",null),i.default.createElement("br",null),"showIcon: ",i.default.createElement(g.Switch,{checked:n,onChange:s}),i.default.createElement("br",null),i.default.createElement("br",null),"showLeafIcon:"," ",i.default.createElement(g.Select,{defaultValue:"true",onChange:O},i.default.createElement(g.Select.Option,{value:"true"},"True"),i.default.createElement(g.Select.Option,{value:"false"},"False"),i.default.createElement(g.Select.Option,{value:"custom"},"Custom icon"))),i.default.createElement(g.Tree,{showLine:x?{showLeafIcon:v}:!1,showIcon:n,defaultExpandedKeys:["0-0-0"],onSelect:w,treeData:R}))},d=Y;return M.createElement(d)}}},4772:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u53EF\u641C\u7D22\u7684\u6811\u3002"]],"en-US":[["p","Searchable Tree."]]},meta:{order:4,title:{"zh-CN":"\u53EF\u641C\u7D22","en-US":"Searchable"},filename:"components/tree/demo/search.md",id:"components-tree-demo-search"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Input<span class="token punctuation">,</span> Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useMemo<span class="token punctuation">,</span> useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Search } <span class="token operator">=</span> Input<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> defaultData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey || <span class="token string">'0'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns || defaultData<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; x; i++) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${preKey}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> {
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> {
    return tns<span class="token comment" spellcheck="true">;</span>
  }
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    return <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> dataList<span class="token punctuation">:</span> { key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token comment" spellcheck="true">; title: string }[] = [];</span>
<span class="token keyword">const</span> generateList <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; data.length; i++) {</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> { key } <span class="token operator">=</span> node<span class="token comment" spellcheck="true">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ key<span class="token punctuation">,</span> title<span class="token punctuation">:</span> key as string }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> getParentKey <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> tree<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key <span class="token operator">=</span><span class="token operator">></span> {
  let parentKey<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; tree.length; i++) {</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> {
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
      } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> {
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }
    }
  }
  return parentKey!<span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> { value } <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> {
          return <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
        return <span class="token keyword">null</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> item <span class="token operator">&amp;</span><span class="token operator">&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> i<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys as React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title as string<span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>
              {beforeStr}
              <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"site-tree-search-value"</span><span class="token operator">></span>{searchValue}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
              {afterStr}
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>{strTitle}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
          return { title<span class="token punctuation">,</span> key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> }<span class="token comment" spellcheck="true">;</span>
        }

        return {
          title<span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        }<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    return <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Search style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">8</span> }} placeholder<span class="token operator">=</span><span class="token string">"Search"</span> onChange<span class="token operator">=</span>{onChange} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Tree
        onExpand<span class="token operator">=</span>{onExpand}
        expandedKeys<span class="token operator">=</span>{expandedKeys}
        autoExpandParent<span class="token operator">=</span>{autoExpandParent}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token operator">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dataList<span class="token operator">:</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">;</span> title<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> title<span class="token operator">:</span> key <span class="token keyword">as</span> string <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getParentKey <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> tree<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> parentKey<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newExpandedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys <span class="token keyword">as</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title <span class="token keyword">as</span> string<span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>strTitle<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
        <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">getParentKey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> tree</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> parentKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newExpandedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>strTitle<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            title<span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
        <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43);function h(n){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},h(n)}var b=l(12),g=D(l(0));function i(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(i=function(v){return v?a:s})(n)}function D(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||h(n)!=="object"&&typeof n!="function")return{default:n};var a=i(s);if(a&&a.has(n))return a.get(n);var k={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var w=v?Object.getOwnPropertyDescriptor(n,m):null;w&&(w.get||w.set)?Object.defineProperty(k,m,w):k[m]=n[m]}return k.default=n,a&&a.set(n,k),k}function T(n,s){return z(n)||N(n,s)||S(n,s)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,s){if(n){if(typeof n=="string")return A(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(n,s)}}function A(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,k=new Array(s);a<s;a++)k[a]=n[a];return k}function N(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var k,v,m,w,O=[],E=!0,p=!1;try{if(m=(a=a.call(n)).next,s===0){if(Object(a)!==a)return;E=!1}else for(;!(E=(k=m.call(a)).done)&&(O.push(k.value),O.length!==s);E=!0);}catch(c){p=!0,v=c}finally{try{if(!E&&a.return!=null&&(w=a.return(),Object(w)!==w))return}finally{if(p)throw v}}return O}}function z(n){if(Array.isArray(n))return n}var I=b.Input.Search,R=3,Y=2,d=1,o=[],u=function n(s,a,k){for(var v=a||"0",m=k||o,w=[],O=0;O<R;O++){var E="".concat(v,"-").concat(O);m.push({title:E,key:E}),O<Y&&w.push(E)}if(s<0)return m;var p=s-1;w.forEach(function(c,r){return m[r].children=[],n(p,c,m[r].children)})};u(d);var y=[],x=function n(s){for(var a=0;a<s.length;a++){var k=s[a],v=k.key;y.push({key:v,title:v}),k.children&&n(k.children)}};x(o);var P=function n(s,a){for(var k,v=0;v<a.length;v++){var m=a[v];m.children&&(m.children.some(function(w){return w.key===s})?k=m.key:n(s,m.children)&&(k=n(s,m.children)))}return k},t=function(){var s=(0,g.useState)([]),a=T(s,2),k=a[0],v=a[1],m=(0,g.useState)(""),w=T(m,2),O=w[0],E=w[1],p=(0,g.useState)(!0),c=T(p,2),r=c[0],f=c[1],L=function(U){v(U),f(!1)},W=function(U){var G=U.target.value,B=y.map(function($){return $.title.indexOf(G)>-1?P($.key,o):null}).filter(function($,F,V){return $&&V.indexOf($)===F});v(B),E(G),f(!0)},H=(0,g.useMemo)(function(){var K=function U(G){return G.map(function(B){var $=B.title,F=$.indexOf(O),V=$.substring(0,F),J=$.slice(F+O.length),sn=F>-1?g.default.createElement("span",null,V,g.default.createElement("span",{className:"site-tree-search-value"},O),J):g.default.createElement("span",null,$);return B.children?{title:sn,key:B.key,children:U(B.children)}:{title:sn,key:B.key}})};return K(o)},[O]);return g.default.createElement("div",null,g.default.createElement(I,{style:{marginBottom:8},placeholder:"Search",onChange:W}),g.default.createElement(b.Tree,{onExpand:L,expandedKeys:k,autoExpandParent:r,treeData:H}))},e=t;return M.createElement(e)},style:`.site-tree-search-value {
  color: #f50;
}
[data-theme="dark"] .site-tree-search-value {
  color: #d84a1b;
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-tree-search-value</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#f50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4773:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002"]],"en-US":[["p","customize collapse/expand icon of tree node"]]},meta:{order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807","en-US":"Customize collapse/expand icon"},filename:"components/tree/demo/switcher-icon.md",id:"components-tree-demo-switcher-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      showLine
      switcherIcon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
      defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
      onSelect<span class="token operator">=</span>{onSelect}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">showLine</span>
      <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">showLine</span>
      <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(61),b=l(12),g=i(l(0));function i(S){return S&&S.__esModule?S:{default:S}}var D=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"},{title:"leaf",key:"0-0-0-2"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]},{title:"parent 1-2",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"leaf",key:"0-0-2-1"}]}]}],T=function(){var A=function(z,I){console.log("selected",z,I)};return g.default.createElement(b.Tree,{showLine:!0,switcherIcon:g.default.createElement(h.DownOutlined,null),defaultExpandedKeys:["0-0-0"],onSelect:A,treeData:D})},C=T;return M.createElement(C)}}},4774:function(j,Q,l){j.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","height"]," \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u3002"]],"en-US":[["p","Use virtual list through ",["code","height"]," prop."]]},meta:{order:9,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual scroll"},filename:"components/tree/demo/virtual-scroll.md",id:"components-tree-demo-virtual-scroll"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; 10; i += 1) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${path}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> treeNode<span class="token punctuation">:</span> DataNode <span class="token operator">=</span> {
      title<span class="token punctuation">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    }<span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> {
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }
  return list<span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tree treeData<span class="token operator">=</span>{treeData} height<span class="token operator">=</span>{<span class="token number">233</span>} defaultExpandAll <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode<span class="token operator">:</span> DataNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var M=l(0),q=l(43),h=l(12),b=g(l(0));function g(S){return S&&S.__esModule?S:{default:S}}var i=function S(){for(var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"0",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,z=[],I=0;I<10;I+=1){var R="".concat(A,"-").concat(I),Y={title:R,key:R};N>0&&(Y.children=S(R,N-1)),z.push(Y)}return z},D=i(),T=function(){return b.default.createElement(h.Tree,{treeData:D,height:233,defaultExpandAll:!0})},C=T;return M.createElement(C)}}}}]);
