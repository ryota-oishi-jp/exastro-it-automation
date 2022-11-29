////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   Exastro IT Automation / messageid_ja.js
//
//   -----------------------------------------------------------------------------------------------
//
//   Copyright 2022 NEC Corporation
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////////////////////////

// メッセージIDの頭文字 FTE
// 標準メニュー        00001～01000
// メニュー定義・作成  01001～02000
// Conductorクラス編集 02001～03000
// Conductor作業確認   03001～04000
// 作業実行            04001～05000
// 作業状態確認        05001～06000
//
// UI共通              10001～11000


getMessage = ( function() {

    const message = {
        // 標準メニュー
        'FTE00001' : "フィルタ",
        'FTE00002' : "閉じる",
        'FTE00003' : "開く",
        'FTE00004' : "選択してください。",
        'FTE00005' : "作業実行",
        'FTE00006' : "ドライラン",
        'FTE00007' : "パラメータ確認",
        'FTE00008' : "登録",
        'FTE00009' : "編集",
        'FTE00010' : "このメニューは閲覧のみ可能です。",
        'FTE00011' : "編集確認",
        'FTE00012' : "追加",
        'FTE00013' : "複製",
        'FTE00014' : "削除",
        'FTE00015' : "廃止",
        'FTE00016' : "復活",
        'FTE00017' : "編集キャンセル",
        'FTE00018' : "キャンセル確認",
        'FTE00019' : "編集中のデータがありますが破棄しますか？",
        'FTE00020' : "破棄する",
        'FTE00021' : "編集に戻る",
        'FTE00022' : "編集反映",
        'FTE00023' : "登録・編集に戻る",
        'FTE00024' : "変更前",
        'FTE00025' : "非表示",
        'FTE00026' : "表示",
        'FTE00027' : "履歴表示",
        'FTE00028' : "履歴リセット",
        'FTE00029' : "対象の",
        'FTE00030' : "を入力し、",
        'FTE00031' : "履歴表示を押下してください。",
        'FTE00032' : "選択",
        'FTE00033' : "区分",
        'FTE00034' : "内容",
        'FTE00035' : "履歴通番",
        'FTE00036' : "変更日時",
        'FTE00037' : "必須",
        'FTE00038' : "廃止",
        'FTE00039' : "プルダウン検索",
        'FTE00040' : "全レコード",
        'FTE00041' : "廃止含まず",
        'FTE00042' : "廃止のみ",
        'FTE00043' : "フィルタ",
        'FTE00044' : "フィルタクリア",
        'FTE00045' : "オートフィルタ",
        'FTE00046' : "Excelダウンロード",
        'FTE00047' : "JSONダウンロード",
        'FTE00048' : "Excel出力最大行数",
        'FTE00049' : "行",
        'FTE00050' : "を超過しているためダウンロードできません。",
        'FTE00051' : "オペレーション",
        'FTE00052' : "パスワード入力",
        'FTE00053' : "入力済みパスワードの削除",
        'FTE00054' : "表示できる内容がありません。",
        'FTE00055' : "初期フィルタがオフです。",
        'FTE00056' : "表示するにはフィルタしてください。",
        'FTE00057' : "履歴",
        'FTE00058' : "フィルタ結果件数",
        'FTE00059' : "0 件",
        'FTE00060' : "1ページに表示する件数",
        'FTE00061' : "ページ",
        'FTE00062' : "編集件数",
        'FTE00063' : " 件",
        'FTE00064' : "共通",
        'FTE00065' : "バリデーションエラー",
        'FTE00066' : function( result, limit ){ return `表示前確認件数を超えていますが、表示してもよろしいですか?\n（表示前確認件数${limit}件、レコード件数${result}件）`},
        'FTE00067' : function( result, limit ){ return `表示最大件数を超えています。\nフィルタ条件で絞り込んで下さい。\n（表示最大件数${limit}件、レコード件数${result}件）`},
        'FTE00068' : "バリデーションエラーです。",
        'FTE00069' : "登録",
        'FTE00070' : "エラー列",
        'FTE00071' : "エラー内容",
        'FTE00072' : "登録",
        'FTE00073' : "更新",
        'FTE00074' : "廃止",
        'FTE00075' : "復活",
        'FTE00076' : "ファイルクリア",
        'FTE00077' : "ようこそIT Automationへ",
        'FTE00078' : "メニュー情報",
        'FTE00079' : "メニュー情報表示",
        'FTE00080' : "作業状態確認",
        'FTE00081' : "実行ログ",
        'FTE00082' : "エラーログ",
        'FTE00083' : "一括登録確認",
        'FTE00084' : "一括登録処理中",
        'FTE00085' : function( result, limit ){ return `Excel出力行数：${result}行\n\nExcel出力最大行数（${limit}行）を超過しているためダウンロードを中止します。`},
        
        // メニュー定義・作成
        'FTE01001' : "項目",
        'FTE01002' : "グループ",
        'FTE01003' : "取り消し",
        'FTE01004' : "やり直し",
        'FTE01005' : "プレビュー",
        'FTE01006' : "ログ",
        'FTE01007' : "一覧(プレビュー)",
        'FTE01008' : "メニュー作成情報",
        'FTE01009' : "基本情報",
        'FTE01010' : "項番",
        'FTE01011' : "自動入力",
        'FTE01012' : "メニュー名",
        'FTE01013' : "メニュー名(REST)",
        'FTE01014' : "作成対象",
        'FTE01015' : "表示順序",
        'FTE01016' : "縦メニュー利用",
        'FTE01017' : "最終更新日時",
        'FTE01018' : "最終更新者",
        'FTE01019' : "対象メニューグループ",
        'FTE01020' : "入力用",
        'FTE01021' : "代入値自動登録用",
        'FTE01022' : "参照用",
        'FTE01023' : "一意制約(複数項目)",
        'FTE01024' : "パターン",
        'FTE01025' : "アクセス許可ロール",
        'FTE01026' : "ロール",
        'FTE01027' : "説明",
        'FTE01028' : "備考",
        'FTE01029' : "作成するメニュー（パラメータシート/データシート）の名称を入力します。[最大長]255バイト\n※「メインメニュー」という名称はメニュー名に使用できません。\n※「&#92;&#47;&#58;&#42;&#63;&#34;&#60;&#62;&#124;&#91;&#93;：￥／＊［］」の記号は使用できません。",
        'FTE01030' : "作成するメニュー（パラメータシート/データシート）のREST API用の名称を入力します。[最大長]240バイト\n※半角英数字と「-_」の記号のみ利用できます。",
        'FTE01031' : "プルダウンから「パラメータシート(ホスト/オペレーションあり)」「データシート」のいずれかを選択します。",
        'FTE01032' : "メニューグループにおける表示順序を入力します。昇順に表示されます。\n※0～2147483647の整数数値が入力できます。",
        'FTE01033' : "「利用する」チェックボックスにチェックをいれた場合、縦メニューに対応したパラメータシートを作成します。",
        'FTE01034' : "利用する",
        'FTE01035' : "対象メニューグループを選択",
        'FTE01036' : "一意制約(複数項目)を選択",
        'FTE01037' : "アクセス許可ロールを選択",
        'FTE01038' : "説明を入力します。[最大長]1024バイト",
        'FTE01039' : "備考を入力します。[最大長]4000バイト",
        'FTE01040' : "は必須項目です。",
        'FTE01041' : "作成",
        'FTE01042' : "編集",
        'FTE01043' : "初期化",
        'FTE01044' : "流用新規",
        'FTE01045' : "メニュー作成履歴",
        'FTE01046' : "作成(初期化)",
        'FTE01047' : "再読込",
        'FTE01048' : "キャンセル",
        'FTE01049' : "作成(編集)",
        'FTE01050' : "閉じる",
        'FTE01051' : "決定",
        'FTE01052' : "取消",
        'FTE01053' : "項目",
        'FTE01054' : "グループ",
        'FTE01055' : "最大バイト数",
        'FTE01056' : "正規表現",
        'FTE01057' : "最小値",
        'FTE01058' : "最大値",
        'FTE01059' : "桁数",
        'FTE01060' : "選択項目",
        'FTE01061' : "必須",
        'FTE01062' : "一意制約",
        'FTE01063' : "説明",
        'FTE01064' : "備考",
        'FTE01065' : "ホスト名",
        'FTE01066' : "オペレーション",
        'FTE01067' : "パラメータ",
        'FTE01068' : "オペレーション名",
        'FTE01069' : "基準日時",
        'FTE01070' : "実施予定日",
        'FTE01071' : "最終実行日時",
        'FTE01072' : "備考",
        'FTE01073' : "最終更新日時",
        'FTE01074' : "最終更新者",
        'FTE01075' : "オペレーション",
        'FTE01076' : "システム管理者",
        'FTE01077' : "対象メニューグループ",
        'FTE01078' : "リピートが解除されます。",
        'FTE01079' : "リピートを含む項目はコピーできません。",
        'FTE01080' : "入力用",
        'FTE01081' : "代入値<br>自動登録用",
        'FTE01082' : "参照用",
        'FTE01083' : "メニューグループ名称",
        'FTE01084' : "縦メニューについて",
        'FTE01085' : "利用する",
        'FTE01086' : "ファイル最大バイト数",
        'FTE01087' : "参照項目",
        'FTE01088' : "[参照した値]",
        'FTE01089' : "参照項目を選択",
        'FTE01090' : "作成",
        'FTE01091' : "一意制約(複数項目)",
        'FTE01092' : "アクセス許可ロール",
        'FTE01093' : "参照項目",
        'FTE01094' : "初期値",
        'FTE01095' : "メニュー",
        'FTE01096' : "項目",
        'FTE01097' : "文字列(単一行)",
        'FTE01098' : "文字列(複数行)",
        'FTE01099' : "パスワード",
        'FTE01100' : "ファイル",
        'FTE01101' : "リンク",
        'FTE01102' : "[参照した値]",
        'FTE01103' : "項目を移動します。",
        'FTE01104' : "項目の名称を入力します。[最大長]255バイト\n※項目名に「/」は使用禁止です。",
        'FTE01105' : "項目の名称(REST API用)を入力します。[最大長]255バイト\n※半角英数字と「_-」のみ使用可能です。",
        'FTE01106' : "項目を削除します。",
        'FTE01107' : "項目をコピーします。",
        'FTE01108' : "リピート数を入力します。\n※2～99の整数が入力できます。",
        'FTE01109' : "入力方式をプルダウンメニューの「文字列(単一行)」、「文字列(複数行)」、\n「整数」、「小数」、「日時」、「日付」、「プルダウン選択」、「パスワード」、\n「ファイルアップロード」、「リンク」のいずれかから選択します。",
        'FTE01110' : "最大バイト数を入力します。[最大長]8192バイト\n編集の場合、元の値より増加させることは可能です。\n※半角英数字なら文字数分となります。\n※全角文字ならば文字数×3＋2 バイト必要になります。",
        'FTE01111' : "正規表現による入力値チェックを行う場合は、正規表現を入力します。[最大長]8192バイト\n例：0バイト以上の半角数値項目の場合： ^[0-9]*$\n　　1バイト以上の半角英数字の場合： ^[a-zA-Z0-9]+$",
        'FTE01112' : "最小値を入力します。\n編集の場合、元の値より減少させることは可能です。\n※-2147483648～2147483647 の整数数値が入力できます。\n※未入力の場合は-2147483648 になります。\n※最小値は最大値より小さい数値を入力してください。",
        'FTE01113' : "最大値を入力します。\n編集の場合、元の値より増加させることは可能です。\n※-2147483648～2147483647 の整数数値が入力できます。\n※未入力の場合は 2147483647 になります。\n※最大値は最小値より大きい数値を入力してください。",
        'FTE01114' : "最小値を入力します。\n編集の場合、元の値より減少させることは可能です。\n※-99999999999999～99999999999999、整数・小数合計 14 桁以下の小数数値が入力できます。\n※未入力の場合は-99999999999999 になります。\n※最小値は最大値より小さい数値を入力してください。",
        'FTE01115' : "最大値を入力します。\n編集の場合、元の値より増加させることは可能です。\n※-99999999999999～99999999999999、整数・小数合計 14 桁以下の小数数値が入力できます。\n※未入力の場合は 99999999999999 になります。\n※最大値は最小値より大きい数値を入力してください。",
        'FTE01116' : "整数・小数の合計桁数上限を入力します。\n編集の場合、元の値より増加させることは可能です。\n例：0.123は4桁(整数1桁、小数3桁)\n　　11.1111は6桁(整数2桁、小数4桁)\n※1～14の整数数値が入力できます。\n※未入力の場合は14になります。",
        'FTE01117' : "作成したメニュー(パラメータシート/データシート)から参照する対象をプルダウンから選択します。\n「選択項目」欄の文字列は「メニューグループ：メニュー：項目」の構成です。",
        'FTE01118' : "「プルダウン選択」で選んだメニュー項目を元に、ほかの項目を参照します。",
        'FTE01119' : "アップロードするファイルの最大バイト数を入力します。\n編集の場合、元の値より増加させることは可能です。\n最大は104857600バイトです。",
        'FTE01120' : "作成対象「パラメータシート(オペレーションあり)」で作成したメニューの項目の中から参照する項目を選択します。\n選択した項目の中から同一オペレーションの値を参照します。",
        'FTE01121' : "作成したメニューから登録する際、デフォルトで入力欄に入る値を設定します。\n「最大バイト数」を超える値、「正規表現」に不一致な値は設定できません。",
        'FTE01122' : "作成したメニューから登録する際、デフォルトで入力欄に入る値を設定します。\n「最大値」「最小値」の範囲外の値は設定できません。",
        'FTE01123' : "作成したメニューから登録する際、デフォルトで入力欄に入る値を設定します。\n「最大値」「最小値」「桁数」の範囲外の値は設定できません。",
        'FTE01124' : "作成したメニューから登録する際、デフォルトで入力欄に入る値を設定します。",
        'FTE01125' : "作成したメニューから登録する際、デフォルトで入力欄に入る値を設定します。\n「最大バイト数」を超える値は設定できません。",
        'FTE01126' : "作成したメニューから登録する際、デフォルトで選択される値を設定します。",
        'FTE01127' : "必須項目にする場合は、チェックボックスを選択します。",
        'FTE01128' : "一意制約項目にする場合は、チェックボックスを選択します。",
        'FTE01129' : "項目名をマウスオーバーした際に表示される説明を入力します。[最大長]1024バイト",
        'FTE01130' : "備考を入力します。[最大長]4000バイト",
        'FTE01131' : "Please Wait... Loading",
        'FTE01132' : "初期値の取得に失敗しました。",
        'FTE01133' : "ID変換失敗",
        'FTE01134' : "日時",
        'FTE01135' : "日付",
        'FTE01136' : "メニュー作成を実行しますか？\n※既に同じメニュー名のメニューや「メニュー定義一覧」メニューの項番が同じメニューが存在する場合、上書きでメニューが作成され、入力済みのデータは削除されます。\n入力済みのデータが必要な場合は、「キャンセル」を選択して、データをバックアップしてください。",
        'FTE01137' : "メニューの初期化を実行しますか？\n※このメニューの入力済みのデータは削除されます。\n入力済みのデータが必要な場合は、「キャンセル」を選択して、データをバックアップしてください。",
        'FTE01138' : "メニューの編集を実行しますか？\n※既存の項目に入力されているデータは残りますが、既存の項目を削除していた場合、その項目に入力されていたデータは削除されます。\n既存の項目で「正規表現」を変更した場合、既存のデータと不整合が発生する可能性があります。\nまた、新たに追加した項目を「必須」や「一意制約」としていた場合、必須項目に空のデータが入り、データの不整合が発生する可能性があります。\n修正が必要な場合は「キャンセル」を選択してください。",
        'FTE01139' : "参照項目の取得に失敗しました",
        'FTE01140' : "メニュー作成を受付ました。\nメニュー作成履歴ボタンを押して、メニュー作成状況を確認してください。\nUUID：",
        'FTE01141' : "バリデーションエラーです。",
        'FTE01142' : "項目が一つもありません",
        'FTE01143' : "削除",
        'FTE01144' : "パターンを追加",
        'FTE01145' : "パターンが一つもありません。",
        'FTE01146' : "項目名",
        'FTE01147' : "項目名(rest)",
        'FTE01148' : "フルスクリーン",
        'FTE01149' : "フルスクリーン解除",
        'FTE01150' : "最大バイト数を入力します。[最大長]255バイト\n編集の場合、元の値より増加させることは可能です。\n※半角英数字なら文字数分となります。\n※全角文字ならば文字数×3＋2 バイト必要になります。",
        'FTE01151' : "作成(新規)",
        'FTE01152' : "参照可能な項目がありません。",
        
        // Conductor
        'FTE02001' : "ConductorインスタンスIDが未設定です。",
        'FTE02002' : "ConductorインスタンスIDを入力し作業確認ボタンを押下するか、",
        'FTE02003' : "Conductor作業一覧",
        'FTE02004' : "ページにて詳細ボタンを押下してください。",
        'FTE02005' : "選択",
        'FTE02006' : "登録",
        'FTE02007' : "リセット",
        'FTE02008' : "編集",
        'FTE02009' : "作業実行",
        'FTE02010' : "流用新規",
        'FTE02011' : "新規",
        'FTE02012' : "更新",
        'FTE02013' : "再読み込み",
        'FTE02014' : "キャンセル",
        'FTE02015' : "作業確認",
        'FTE02016' : "予約取消",
        'FTE02017' : "緊急停止",
        'FTE02018' : "ConductorインスタンスID",
        'FTE02019' : "フルスクリーン",
        'FTE02020' : "フルスクリーン解除",
        'FTE02021' : "JSON保存",
        'FTE02022' : "JSON読込",
        'FTE02023' : "操作取り消し",
        'FTE02024' : "操作やり直し",
        'FTE02025' : "選択ノード削除",
        'FTE02026' : "全体表示",
        'FTE02027' : "ログ",
        'FTE02028' : "の読み込みに失敗しました。",
        'FTE02029' : "作業実行に失敗しました。",
        'FTE02030' : "登録しますか？",
        'FTE02031' : "登録しました。",
        'FTE02032' : "登録に失敗しました。",
        'FTE02033' : "読み込み完了しました。",
        'FTE02034' : "リセットしますか？",
        'FTE02035' : "リセットしました。",
        'FTE02036' : "流用しますか？",
        'FTE02037' : "流用しました。",
        'FTE02038' : "更新しますか？",
        'FTE02039' : "更新しました。",
        'FTE02040' : "更新に失敗しました。",
        'FTE02041' : "再読込しますか？",
        'FTE02042' : "再読込しました。",
        'FTE02043' : "Conductorの予約を取り消してよろしいですか？",
        'FTE02044' : "緊急停止しますか？",
        'FTE02045' : "正常終了",
        'FTE02046' : "異常終了",
        'FTE02047' : "想定外エラー",
        'FTE02048' : "緊急停止",
        'FTE02049' : "準備エラー",
        'FTE02050' : "Skip終了",
        'FTE02051' : "警告終了",
        'FTE02052' : "Other",
        'FTE02053' : "条件分岐は最大６つです。",
        'FTE02054' : "接続先がありません。",
        'FTE02055' : "マージできません。",
        'FTE02056' : "正常",
        'FTE02057' : "異常",
        'FTE02058' : "警告",
        'FTE02059' : "フィルタ設定",
        'FTE02060' : "正規表現を使用しない",
        'FTE02061' : "正規表現を使用する",
        'FTE02062' : "オーケストレータ選択",
        'FTE02063' : "設定",
        'FTE02064' : "キャンセル",
        'FTE02065' : "備考",
        'FTE02066' : "説明を入力します。[最大長]4000バイト",
        'FTE02067' : "Conductor情報",
        'FTE02068' : "Conductor名称を入力します。[最大長]255バイト",
        'FTE02069' : "名称",
        'FTE02070' : "更新日時",
        'FTE02071' : "Movement情報",
        'FTE02072' : "ID",
        'FTE02073' : "スキップ",
        'FTE02074' : "個別オペレーション",
        'FTE02075' : "オペレーション選択",
        'FTE02076' : "クリア",
        'FTE02077' : "終了ステータス",
        'FTE02078' : "平行分岐設定",
        'FTE02079' : "分岐追加",
        'FTE02080' : "分岐削除",
        'FTE02081' : "平行マージ設定",
        'FTE02082' : "マージ追加",
        'FTE02083' : "マージ削除",
        'FTE02084' : "条件分岐設定",
        'FTE02085' : "分岐追加",
        'FTE02086' : "分岐削除",
        'FTE02087' : "Conductor call情報",
        'FTE02088' : "スキップ",
        'FTE02089' : "呼び出しConductor",
        'FTE02090' : "Conductor選択",
        'FTE02091' : "クリア",
        'FTE02092' : "個別オペレーション",
        'FTE02093' : "オペレーション選択",
        'FTE02094' : "クリア",
        'FTE02095' : "ステータスファイル分岐設定",
        'FTE02096' : "条件追加",
        'FTE02097' : "条件削除",
        'FTE02098' : "Node 整列",
        'FTE02099' : "整列",
        'FTE02100' : "水平方向左に整列",
        'FTE02101' : "水平方向中央に整列",
        'FTE02102' : "水平方向右に整列",
        'FTE02103' : "垂直方向上に整列",
        'FTE02104' : "垂直方向中央に整列",
        'FTE02105' : "垂直方向下に整列",
        'FTE02106' : "等間隔",
        'FTE02107' : "垂直方向等間隔に分布",
        'FTE02108' : "水平方向等間隔に分布",
        'FTE02109' : "Conductorインスタンス情報",
        'FTE02110' : "ステータス",
        'FTE02111' : "開始時間",
        'FTE02112' : "終了時間",
        'FTE02113' : "実行ユーザ",
        'FTE02114' : "予約日時",
        'FTE02115' : "緊急停止",
        'FTE02116' : "オペレーション",
        'FTE02117' : "Nodeインスタンス情報",
        'FTE02118' : "種別",
        'FTE02119' : "Node ID",
        'FTE02120' : "Stファイル",
        'FTE02121' : "開始日時",
        'FTE02122' : "終了日時",
        'FTE02123' : "作業状況確認",
        'FTE02124' : "確認",
        'FTE02125' : "個別オペレーション",
        'FTE02126' : "Conductorデータが正しくありません。",
        'FTE02127' : "読み込みに失敗しました。",
        'FTE02128' : "作業状態確認",
        'FTE02129' : "予約取消に失敗しました",
        'FTE02130' : "緊急停止に失敗しました",
        'FTE02131' : "一時停止を解除しますか？",
        'FTE02132' : "一時停止の解除に失敗しました",
        'FTE02133' : "編集モード",
        'FTE02134' : "閲覧モード",
        'FTE02135' : "更新モード",
        'FTE02136' : "確認モード",
        'FTE02137' : "接続済みの分岐は削除できません。",
        'FTE02138' : "分岐は最低２つです。",
        'FTE02139' : "ループする接続はできません。",
        'FTE02140' : "Conductor実行エラー",
        'FTE02141' : "Conductor実行ログ",
        'FTE02142' : "メニュー",
        'FTE02143' : "自動入力",
        'FTE02144' : "マウスホイール",
        'FTE02145' : "画面の拡大・縮小",
        'FTE02146' : "マウス右ドラッグ",
        'FTE02147' : "画面の移動",
        'FTE02148' : "マウス左クリック",
        'FTE02149' : "Node選択・接続線削除",
        'FTE02150' : "マウス左ドラッグ",
        'FTE02151' : "Node移動・複数選択",
        'FTE02152' : "Node選択",
        'FTE02153' : "Node選択・作業状態確認",
        'FTE02154' : "マウス操作",
        'FTE02155' : "キーボード操作",
        'FTE02156' : "全てのNodeを選択",
        'FTE02157' : "選択したNodeを削除",
        'FTE02158' : "選択したNodeの移動",
        'FTE02159' : "選択した分岐Nodeの分岐追加・削除",
        'FTE02160' : "方向キー",
        'FTE02161' : "読み込み中",
        'FTE02162' : "編集途中のデータがLocal storageから読み込まれました。",
        'FTE02163' : "Movement名",
        
        // 作業状態確認
        'FTE05001' : "作業No.",
        'FTE05002' : "作業状態確認",
        'FTE05003' : "予約取消",
        'FTE05004' : "緊急停止",
        'FTE05005' : "作業No.が未設定です。",
        'FTE05006' : "作業No.を入力し作業状態確認ボタンを押下するか、",
        'FTE05007' : "作業管理ページ",
        'FTE05008' : "にて詳細ボタンを押下してください。",
        'FTE05009' : "作業ステータス",
        'FTE05010' : "実行種別",
        'FTE05011' : "ステータス",
        'FTE05012' : "実行エンジン",
        'FTE05013' : "呼出元Conductor",
        'FTE05014' : "実行ユーザ",
        'FTE05015' : "投入データ",
        'FTE05016' : "結果データ",
        'FTE05017' : "作業状況",
        'FTE05018' : "予約日時",
        'FTE05019' : "開始日時",
        'FTE05020' : "終了日時",
        'FTE05021' : "オペレーション",
        'FTE05022' : "ID",
        'FTE05023' : "名称",
        'FTE05024' : "作業対象ホスト確認",
        'FTE05025' : "代入値確認",
        'FTE05026' : "Movement",
        'FTE05027' : "遅延タイマー(分)",
        'FTE05028' : "Movement詳細確認",
        'FTE05029' : "Ansible利用情報",
        'FTE05030' : "ホスト指定形式",
        'FTE05031' : "WinRM接続",
        'FTE05032' : "ansible.cfg",
        'FTE05033' : "Ansible Core利用情報",
        'FTE05034' : "virtualenv",
        'FTE05035' : "Ansible Automation Controller利用情報",
        'FTE05036' : "実行環境",
        'FTE05037' : "予約を取り消してよろしいですか？",
        
        // UI共通
        'FTE10001': 'メインメニュー',
        'FTE10002': 'メニューグループ',
        'FTE10003': 'お気に入り',
        'FTE10004': '履歴',
        'FTE10005': 'ワークスペース切替',
        'FTE10006': 'ロール一覧',
        'FTE10007': 'メニュー検索',
        'FTE10008': '一覧',
        'FTE10009': '変更履歴',
        'FTE10010': '全件ダウンロード・ファイル一括登録',
        'FTE10011': '全件ダウンロード（Excel）',
        'FTE10012': '登録している項目の一覧をエクセルシートでダウンロードします。',
        'FTE10013': '全件ダウンロード（JSON）',
        'FTE10014': '登録している項目の一覧をJSONでダウンロードします。',
        'FTE10015': '新規登録用ダウンロード（Excel）',
        'FTE10016': '新規登録用のエクセルシートをダウンロードします。',
        'FTE10017': 'ファイル一括登録（Excel）',
        'FTE10018': '全件ダウンロード・新規登録用ダウンロードでダウンロードしたエクセルシートを編集し、ここからアップロードすることで一括して追加・編集ができます。',
        'FTE10019': 'ファイル一括登録（JSON）',
        'FTE10020': 'JSONファイルをここからアップロードすることで一括して追加・編集ができます。',
        'FTE10021': 'JSONの形式が正しくありません。',
        'FTE10023': '変更履歴全件ダウンロード（Excel）',
        'FTE10024': '登録している項目一覧の変更履歴全件をエクセルシートでダウンロードします。',
        'FTE10025': '一括登録開始',
        'FTE10026': 'キャンセル',
        'FTE10027': 'ファイルネーム',
        'FTE10028': 'ファイルサイズ',
        'FTE10029': '件数',
        'FTE10030': 'システムエラー',
        'FTE10031': '全件ダウンロードでダウンロードしたエクセルシートを編集し、ここからアップロードすることで一括して編集ができます。',
        'FTE10032': 'JSONファイルをここからアップロードすることで一括して編集ができます。',
        'FTE10033': 'バージョン確認',
        'FTE10034': 'ログアウト',
        'FTE10035': 'インストール済みドライバ',
        'FTE10036': ['日','月','火','水','木','金','土'],
        'FTE10037': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        'FTE10038': '反映',
        'FTE10039': '現在',
        'FTE10040': 'クリア',
        'FTE10041': '入力済みパスワードの削除',
        'FTE10042': '登録成功',
        'FTE10043': '閉じる',
        'FTE10044': 'エラー列',
        'FTE10045': 'エラー内容',
        'FTE10046': '登録失敗',
        'FTE10047': 'エラーログJSONダウンロード',
        'FTE10048': '選択決定',
        'FTE10049': 'オペレーション',
        'FTE10050': 'オペレーション選択',
        'FTE10051': '予約日時を指定する場合は、日時フォーマット(yyyy/MM/dd HH:mm:ss)で入力して下さい。<br>ブランクの場合は即時実行となります。',
        'FTE10052': 'スケジュール',
        'FTE10053': 'ログ検索',
        'FTE10054': '該当行のみ表示',
        'FTE10055': '名称',
        'FTE10056': '設定',
        'FTE10057': '必須',
        'FTE10058': 'OK',
        'FTE10059': '確認',
        'FTE10060' : function( size, limit ){ return `ファイルバイト数がファイル最大バイト数を超えています。\n\nファイルバイト数: ${ Number( size ).toLocaleString() } Byte\nファイル最大バイト数: ${ Number( limit ).toLocaleString() } Byte`},
    };

    return message;

}());
