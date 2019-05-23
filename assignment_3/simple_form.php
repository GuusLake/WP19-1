<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP19/assignment_3/index.php',
        'Add news item' => '/WP19/assignment_3/news_add.php',
        'Leap Year' => '/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<?php if (!empty($_GET['name']) && !empty($_GET['place'])){ ?>
    <h1>Welcome <?= $_GET['name'] ?>!</h1>
    <?php if ($_GET['place'] == 'Amsterdam'){ ?>
        <p>You're from the capital of the Netherlands!</p>
    <?php } else{ ?>
        <p>You're from <?= $_GET['place'] ?></p>
    <?php } ?>
<?php } ?>

<div class="col-md-12 row" id="form_div">
    <form action="simple_form.php" method="GET">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Enter name here">
        <label for="place">Place</label>
        <input type="text" class="form-control" id="place" name="place" placeholder="Enter place here">
        <button type="submit" class="btn btn-primary" id="form">Submit</button>
    </form>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>