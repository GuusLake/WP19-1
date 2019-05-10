<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => 'http://siegfried.webhosting.rug.nl/~s3383180/WP19/assignment_2/index.php',
        'Links' => 'http://siegfried.webhosting.rug.nl/~s3383180/WP19/assignment_2/links.php',
        'News' => 'http://siegfried.webhosting.rug.nl/~s3383180/WP19/assignment_2/news.php',
        'Future' => 'http://siegfried.webhosting.rug.nl/~s3383180/WP19/assignment_2/future.php'
    )
);

include __DIR__. '/tpl/head.php';

/* Body */
include __DIR__ . '/tpl/body-start.php';
?>

    <div class="col-md-6 link-div">
        <ul class="list-group linkUl">
            <li class="list-group-item list-group-item-dark">Links</li>
            <li class="list-group-item"><a href="https://www.google.com/">Google</a></li>
            <li class="list-group-item"><a href="https://nestor.rug.nl/">Nestor</a></li>
        </ul>
    </div>

    <div class="col-md-6">
        <button type="button" id="fade" class="btn btn-block btn-outline-primary">Click here to make the list disappear</button>
    </div>

    <div class="col-md-6">
        <form>
            <div>
                <Label for="link_name">Name your link</Label>
                <input type="text" class="form-control form-control-lg" id="linkName" placeholder="Link name">
            </div>
            <div>
                <Label for="link_url">URL of your link</Label>
                <input type="text" class="form-control form-control-lg" id="linkUrl" placeholder="Link URL">
            </div>
            <button type="button" class="btn btn-primary" id="addLink">Add link</button>
        </form>
    </div>

    <div class="col-md-6">
         <button type="button" id="del" class="btn btn-danger">DELETE</button>
    </div>

<?php
include __DIR__ . '/tpl/body-end.php';

/* Footer */
include __DIR__ . '/tpl/footer.php';
?>