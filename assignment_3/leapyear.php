<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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

<!-- Check if required forms have data otherwise don't show anything -->
<!-- This also accounts for the event that a user will press submit when all fields are empty -->

<?php if (!empty($_POST['name']) && !empty($_POST['place']) && !empty($_POST['age'])){ ?>
    <?php
    $current_year = 2019;
    $leap_years = 0;
    ?>

    <!-- Welcoming messages to be displayed -->
    <h1>Hello There <?= $_POST['name'] ?>!</h1>
    <p>Your age in the next five leap years will be in the table below!</p>
    <?php if ($_POST['place'] == 'Groningen'){ ?>
        <p>Good luck with the earthquakes in Groningen!</p>
    <?php } else{ ?>
        <p>You're from <?= $_POST['place'] ?></p>
    <?php } ?>

    <!-- Table that shows your age in the next 5 leap years -->
    <table class="table table-striped">
        <tr>
            <th>Year</th>
            <th>Age</th>
        </tr>
    <?php for($i = $current_year; $leap_years < 5; $i++){
            if((($i % 4) == 0) && ((($i % 100) != 0) || (($i % 400) == 0))){
                $age = $_POST['age'] + $i - $current_year;
                $leap_years++;
                ?>
                <tr>
                    <td><?= $i ?>
                    <td><?= $age ?></td>
                </tr>
            <?php } ?>
    <?php } ?>
    </table>
<?php } ?>

<!-- Form including error messages -->
<!-- Please do not take the error messages seriously -->
<div class="row" id="form_div">
    <form method="POST" class="needs-validation" novalidate>
        <div class='form-group'>
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter name here">
            <div class="valid-feedback">
                Ye're name is pure barry.
            </div>
            <div class="invalid-feedback">
                It's yer name, you buffoon! Try again, ye funt.
            </div>
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" name="age" placeholder="Enter age here">
            <div class="valid-feedback">
                Not that old aren't ye.
            </div>
            <div class="invalid-feedback">
                Do ye think this is a fecking joke? Enter yer age, it's a number, ye wank!
            </div>
        </div>
        <div class="form-group">
            <label for="mail">Mail address</label>
            <input type="text" class="form-control" id="mail" name="mail" placeholder="Enter mail address here">
            <div class="valid-feedback">
                Bloody good job, now ah will make sure Facebook won't get em.
            </div>
            <div class="invalid-feedback">
                Ye know we can't contact ye without yer email address. Enter as follows: scotland4ever@mail.scot
            </div>
        </div>
        <div class="form-group">
            <label for="place">Place</label>
            <input type="text" class="form-control" id="place" name="place" placeholder="Enter place here">
            <div class="valid-feedback">
                Ah'm gaun there one day.
            </div>
            <div class="invalid-feedback">
                Ye're testing me patience, enter a location!
            </div>
        </div>
        <button type="submit" class="btn btn-primary" id="form_btn">Submit</button>
    </form>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
