$(document).ready(function() {
    // ローカルストレージからコメントを読み込む
    loadComments();

    $('#commentForm').on('submit', function(event) {
        event.preventDefault();

        // 名前とコメントの内容を取得
        const nameText = $('#nameInput').val();
        const commentText = $('#commentInput').val();

        // コメントを表示するための新しい要素を作成
        const commentElement = $('<div></div>').addClass('comment').html(`<strong>${nameText}</strong>: ${commentText}`);

        // コメントを表示するコンテナに追加
        $('#commentsContainer').append(commentElement);

        // コメントをローカルストレージに保存
        saveComment(nameText, commentText);

        // 入力欄をクリアする
        $('#nameInput').val('');
        $('#commentInput').val('');
    });

    // リターンキーでフォームを送信するためのイベントリスナーを追加
    $('#commentInput').on('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            $('#commentForm').trigger('submit');
        }
    });

    function saveComment(name, comment) {
        // 現在のコメントを取得
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        // 新しいコメントを追加
        comments.push({ name, comment });
        // ローカルストレージに保存
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        // ローカルストレージからコメントを取得
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        // 取得したコメントを表示
        const commentsContainer = $('#commentsContainer');
        comments.forEach(function(comment) {
            const commentElement = $('<div></div>').addClass('comment').html(`<strong>${comment.name}</strong>: ${comment.comment}`);
            commentsContainer.append(commentElement);
        });
    }
});
