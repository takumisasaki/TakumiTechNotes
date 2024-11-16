(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{356:function(s,e,n){"use strict";n.r(e);var t=n(25),p=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("vupressをデプロイするとコンポーネントが表示されなくなる件")]),s._v(" "),e("p",[s._v("vupressのデプロイにめちゃくちゃ苦戦した\n理由は、GitHub Pagesの公開ブランチとディレクトリの設定が間違っているのに2日間気が付かなかった。\n「初めて使うGitHub ActionsとGitHub Pagesだからしょうがない」と自分に言い聞かせた。")]),s._v(" "),e("p",[s._v("最初に起きた問題はデプロイしてもコンポーネントが表示されないという事件が起きた\n簡単にいうとトップページに記事のリンクを貼っているカードをvueコンポーネントで作成したのだが\nデプロイてから確認するとカードが表示されない、なぜ？ローカルではちゃんと表示されたのに、、、")]),s._v(" "),e("p",[s._v("調べたら、いろいろ設定が足りてなかった。\nいろいろありすぎてざっくり書くと。\n・config.jsの設定\n・deploy.ymlの存在\n・.nojekyllの存在\n・ライブラリとvuepressバージョンの依存関係\n等\nこんな感じです。")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("\n")])])]),e("p",[s._v("Jekyllによるビルドの実行")]),s._v(" "),e("p",[s._v("GitHub PagesがデフォルトでJekyllを使用してビルドを試みたため、VuePressの静的ファイルが正しく表示されない。\n.nojekyllファイルがgh-pagesブランチに存在しない、もしくは正しく配置されていない可能性がある。\ngh-pagesブランチに静的ファイルがデプロイされていない")]),s._v(" "),e("p",[s._v("GitHub Actionsによるデプロイが正常にgh-pagesブランチに対して行われていない可能性がある。\ndocs/.vuepress/distからのファイルが正しくgh-pagesブランチにコピーされていない。\n.nojekyllファイル、index.htmlファイル、その他の静的資産がgh-pagesブランチに含まれていない。\nGitHub Actionsの設定ミス")]),s._v(" "),e("p",[s._v("deploy.ymlで指定しているpublish_dirが正しくない、または間違ったディレクトリが指定されている。\nnpm run docs:buildによるビルドは成功しているが、その後のデプロイステップで何らかの問題が発生している可能性がある。\nGitHub Pagesの設定ミス")]),s._v(" "),e("p",[s._v("GitHub Pagesの「Settings」→「Pages」で、公開するブランチがgh-pagesに設定されていない可能性がある。\n公開ディレクトリの指定が間違っているため、GitHub Pagesが公開するべきファイルを見つけられない状態になっている。\nキャッシュの影響")]),s._v(" "),e("p",[s._v("GitHub Actionsでキャッシュが使用されており、古いビルドのキャッシュがデプロイに影響している可能性がある。\nキャッシュのクリアが必要な場合がある。\nビルド後のdistディレクトリの内容不足")]),s._v(" "),e("p",[s._v("docs/.vuepress/distにビルド後の静的ファイルが正しく生成されていない、または欠落している可能性がある。\n特に、index.htmlやその他の必要なファイルが欠けている場合、GitHub Pagesで正しく表示されない。\nVuePressプラグインの警告")]),s._v(" "),e("p",[s._v("@vuepress/back-to-topや@vuepress/medium-zoomプラグインにエラーが発生しているが、ビルドが進行しているため、これらの警告がデプロイに悪影響を及ぼしている可能性がある。\nプラグインが正しく動作しておらず、一部の機能が失敗している可能性がある。")]),s._v(" "),e("p",[s._v("VuePressのバージョンの不一致")]),s._v(" "),e("p",[s._v("プロジェクトでVuePress 1.xを使用している場合に、VuePress 2.x向けのライブラリ（例えば@vuepress/utilsなど）を使用していたことが、ビルドやデプロイに悪影響を及ぼした可能性があります。\nimport文を使ったES Module形式の書き方も、VuePress 1.xでの互換性の問題の原因となっていたかもしれません。\nプラグインの互換性")]),s._v(" "),e("p",[s._v("@vuepress/back-to-topや@vuepress/medium-zoomのようなプラグインが、プロジェクトで使用しているVuePressのバージョンと互換性がなかったことが原因で警告が発生し、その影響でビルド結果が期待通りにならなかった可能性があります。")])])}),[],!1,null,null,null);e.default=p.exports}}]);