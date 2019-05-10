<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <?= $active = $navigation['active'] ?>
            <?= foreach ($navigation['items'] as $title => $url){
                if ($title == $active){?>
                    <li class="nav-item active">
                        <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                    </li>
                <?= } else{ ?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                    </li>
                <?= } ?>
            <?= } ?>
        </ul>
    </nav>
</header>