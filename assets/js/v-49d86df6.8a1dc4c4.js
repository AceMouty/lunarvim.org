"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[133],{2002:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-49d86df6",path:"/configuration/02-keybindings.html",title:"Keybindings",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"General Bindings",slug:"general-bindings",children:[{level:3,title:"Vim style",slug:"vim-style",children:[]},{level:3,title:"Neovim style",slug:"neovim-style",children:[]},{level:3,title:"LunarVim keybindings",slug:"lunarvim-keybindings",children:[]},{level:3,title:"Listing what is mapped",slug:"listing-what-is-mapped",children:[]}]},{level:2,title:"Whichkey Bindings",slug:"whichkey-bindings",children:[{level:3,title:"Single mapping",slug:"single-mapping",children:[]},{level:3,title:"Submenu mapping",slug:"submenu-mapping",children:[]},{level:3,title:"Replace all whichkey mappings",slug:"replace-all-whichkey-mappings",children:[]},{level:3,title:"Example mappings",slug:"example-mappings",children:[]}]},{level:2,title:"Leader Key",slug:"leader-key",children:[]},{level:2,title:"Cursor Movement",slug:"cursor-movement",children:[]}],filePathRelative:"configuration/02-keybindings.md",git:{updatedTime:1636199876e3,contributors:[{name:"premell",email:"",commits:3},{name:"rebuilt",email:"memoryman51@hotmail.com",commits:2},{name:"Daniel VG",email:"danielveragi@gmail.com",commits:1},{name:"Xavier Young",email:"45989017+younger-1@users.noreply.github.com",commits:1},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:1}]}}},7616:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(6252);const t=(0,e.uE)('<h1 id="keybindings" tabindex="-1"><a class="header-anchor" href="#keybindings" aria-hidden="true">#</a> Keybindings</h1><h2 id="general-bindings" tabindex="-1"><a class="header-anchor" href="#general-bindings" aria-hidden="true">#</a> General Bindings</h2><p>There are three style options for settings keybindings.</p><h3 id="vim-style" tabindex="-1"><a class="header-anchor" href="#vim-style" aria-hidden="true">#</a> Vim style</h3><p>Set bindings with vim.cmd. For more details read <code>:help vim.cmd</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token operator">#</span> Just take your vim keybindings <span class="token keyword">and</span> wrap them <span class="token keyword">in</span> vim<span class="token punctuation">.</span>cmd\nvim<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span><span class="token string">&quot;nnoremap W :w&lt;CR&gt;&quot;</span><span class="token punctuation">)</span>\n\n<span class="token operator">#</span> Multiline Statements\nvim<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span><span class="token string">[[\n    map &lt;Leader&gt;bb :!bundle install&lt;cr&gt;\n    map &lt;Leader&gt;gdm :Git diff master&lt;cr&gt;\n    imap jj &lt;esc&gt;\n]]</span><span class="token punctuation">)</span>\n\n<span class="token operator">#</span> Calling lua functions\nvim<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span><span class="token string">&quot;nnoremap &lt;silent&gt; gi &lt;cmd&gt;lua vim.lsp.buf.implementation()&lt;CR&gt;&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="neovim-style" tabindex="-1"><a class="header-anchor" href="#neovim-style" aria-hidden="true">#</a> Neovim style</h3><p>Use the <code>vim.api.nvim_set_keymap</code> function. Arguments for the function are: (mode, keybind, command, options). For more details read <code>:help map-arguments</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_set_keymap</span><span class="token punctuation">(</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;Leader&gt;&lt;Space&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;:set hlsearch!&lt;CR&gt;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> silent <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">-- Vim equivalent</span>\n<span class="token comment">-- :nnoremap &lt;silent&gt; &lt;Leader&gt;&lt;Space&gt; :set hlsearch&lt;CR&gt;</span>\n\nvim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_set_keymap</span><span class="token punctuation">(</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;Leader&gt;tegf&#39;</span><span class="token punctuation">,</span>  <span class="token string">[[&lt;Cmd&gt;lua require(&#39;telescope.builtin&#39;).git_files()&lt;CR&gt;]]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> silent <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">-- Vim equivalent</span>\n<span class="token comment">-- :nnoremap &lt;silent&gt; &lt;Leader&gt;tegf &lt;Cmd&gt;lua require(&#39;telescope.builtin&#39;).git_files()&lt;CR&gt;</span>\n\nvim<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">nvim_buf_set_keymap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;line(&quot;.&quot;) == 1 ? &quot;cc&quot; : &quot;ggcc&quot;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> noremap <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span> expr <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">-- Vim equivalent</span>\n<span class="token comment">-- :noremap &lt;buffer&gt; &lt;expr&gt; cc line(&#39;.&#39;) == 1 ? &#39;cc&#39; : &#39;ggcc&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="lunarvim-keybindings" tabindex="-1"><a class="header-anchor" href="#lunarvim-keybindings" aria-hidden="true">#</a> LunarVim keybindings</h3><p>Use <code>&lt;Leader&gt;Lk</code> to view the keybindings set by Lunarvim.</p><p>To modify a single Lunarvim keymapping</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>  <span class="token comment">-- X closes a buffer</span>\n  lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;S-x&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:BufferClose&lt;CR&gt;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>To remove keymappings set by Lunarvim</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>  <span class="token comment">-- use the default vim behavior for H and L</span>\n  lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;S-l&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n  lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode<span class="token punctuation">[</span><span class="token string">&quot;&lt;S-h&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">nil</span>\n  <span class="token comment">-- vim.opt.scrolloff = 0 -- Required so L moves to the last line</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Erase Lunarvim bindings and replace them with your own mappings</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code> lvim<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>normal_mode <span class="token operator">=</span> <span class="token punctuation">{</span>\n   <span class="token comment">-- Page down/up</span>\n   <span class="token punctuation">[</span><span class="token string">&quot;[d&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;PageUp&gt;&quot;</span><span class="token punctuation">,</span>\n   <span class="token punctuation">[</span><span class="token string">&quot;]d&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;PageDown&gt;&quot;</span><span class="token punctuation">,</span>\n\n   <span class="token comment">-- Navigate buffers</span>\n   <span class="token punctuation">[</span><span class="token string">&quot;&lt;Tab&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:bnext&lt;CR&gt;&quot;</span><span class="token punctuation">,</span>\n   <span class="token punctuation">[</span><span class="token string">&quot;&lt;S-Tab&gt;&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;:bprevious&lt;CR&gt;&quot;</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="listing-what-is-mapped" tabindex="-1"><a class="header-anchor" href="#listing-what-is-mapped" aria-hidden="true">#</a> Listing what is mapped</h3><p>Use <code>&lt;Leader&gt;Lk</code> to view the keybindings set by Lunarvim.</p><p>To see if a particular key has already been bound:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>verbose map <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>:nmap for normal mode mappings</li><li>:vmap for visual mode mappings</li><li>:imap for insert mode mappings</li></ul><p>Or just list every mapping</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>map\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To output this to a searchable buffer</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>enew<span class="token operator">|</span>pu<span class="token operator">=</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&#39;map&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To view keybindings for the nvimtree plugin. Make sure you&#39;re in an nvimtree buffer and type <code>g?</code> to toggle the keybindings help</p><h2 id="whichkey-bindings" tabindex="-1"><a class="header-anchor" href="#whichkey-bindings" aria-hidden="true">#</a> Whichkey Bindings</h2><p>To add or remap keybindings for whichkey use <code>lvim.builtin.which_key.mappings</code></p><h3 id="single-mapping" tabindex="-1"><a class="header-anchor" href="#single-mapping" aria-hidden="true">#</a> Single mapping</h3><p>Map a single key.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings<span class="token punctuation">[</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;&lt;cmd&gt;lua require&#39;telescope&#39;.extensions.project.project{}&lt;CR&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Projects&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Adding a key to a existing submenu.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings<span class="token punctuation">[</span><span class="token string">&quot;tP&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&quot;&lt;cmd&gt;lua require&#39;telescope&#39;.extensions.project.project{}&lt;CR&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Projects&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="submenu-mapping" tabindex="-1"><a class="header-anchor" href="#submenu-mapping" aria-hidden="true">#</a> Submenu mapping</h3><p>Map a group of keys. <code>Definitions</code> would be triggered by pressing <code>&lt;Leader&gt;td</code>. The name for this menu would appear as <code>Trouble</code>.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings<span class="token punctuation">[</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name <span class="token operator">=</span> <span class="token string">&quot;Trouble&quot;</span><span class="token punctuation">,</span>\n  r <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble lsp_references&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;References&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  f <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble lsp_definitions&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Definitions&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  d <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble lsp_document_diagnostics&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Diagnosticss&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  q <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble quickfix&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;QuickFix&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  l <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble loclist&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LocationList&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  w <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;Trouble lsp_workspace_diagnostics&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Diagnosticss&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="replace-all-whichkey-mappings" tabindex="-1"><a class="header-anchor" href="#replace-all-whichkey-mappings" aria-hidden="true">#</a> Replace all whichkey mappings</h3><p>To clear all whichkey bindings and replace all mappings with your own, use this form.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;BufferClose!&lt;CR&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Close Buffer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;lua require&#39;core.nvimtree&#39;.toggle_tree()&lt;CR&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Explorer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;&lt;cmd&gt;let @/=&quot;&quot;&lt;CR&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;No Highlight&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  p <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name <span class="token operator">=</span> <span class="token string">&quot;Packer&quot;</span><span class="token punctuation">,</span>\n    c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;PackerCompile&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Compile&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    i <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;PackerInstall&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Install&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    r <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;lua require(&#39;lv-utils&#39;).reload_lv_config()&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Reload&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    s <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;PackerSync&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    u <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;&lt;cmd&gt;PackerUpdate&lt;cr&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Update&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="example-mappings" tabindex="-1"><a class="header-anchor" href="#example-mappings" aria-hidden="true">#</a> Example mappings</h3>',41),p=(0,e.Uk)("Consult the "),o={href:"https://github.com/LunarVim/LunarVim/blob/rolling/lua/core/which-key.lua",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("LunarVim configuration for whichkey"),c=(0,e.Uk)(" to see more examples of how to map keys."),i=(0,e.uE)('<h2 id="leader-key" tabindex="-1"><a class="header-anchor" href="#leader-key" aria-hidden="true">#</a> Leader Key</h2><p>The default leader key is <code>Space</code>. This can be changed with the following</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>leader <span class="token operator">=</span> <span class="token string">&quot;space&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="cursor-movement" tabindex="-1"><a class="header-anchor" href="#cursor-movement" aria-hidden="true">#</a> Cursor Movement</h2><p>By default, when pressing left/right cursor keys, Vim will not move to the previous/next line after reaching first/last character in the line. This can be quite annoying for new users. Fortunately this behaviour can be easily changed by putting this in your vimrc file:</p><p>To enable:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>line_wrap_cursor_movement <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Enabling maps the following command</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token keyword">set</span> <span class="token builtin">whichwrap</span><span class="token operator">+=</span><span class="token operator">&lt;</span><span class="token punctuation">,</span><span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token keyword">h</span><span class="token punctuation">,</span><span class="token keyword">l</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),u={},r=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",o,[l,(0,e.Wm)(a)]),c]),i],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);