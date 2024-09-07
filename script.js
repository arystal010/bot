document.addEventListener('DOMContentLoaded', function() {
    const waterButton = document.getElementById('water-button');
    const pruneButton = document.getElementById('prune-button');
    const treeStatus = document.getElementById('tree-status');

    let treeHealth = 100;
    let treeWatered = false;
    let treePruned = false;

    waterButton.addEventListener('click', function() {
        if (!treeWatered) {
            treeHealth += 10;
            treeWatered = true;
            treeStatus.innerText = `Your tree is now ${treeHealth}% healthy`;
        } else {
            treeStatus.innerText = `Your tree is already watered`;
        }
    });

    pruneButton.addEventListener('click', function() {
        if (!treePruned) {
            treeHealth += 10;
            treePruned = true;
            treeStatus.innerText = `Your tree is now ${treeHealth}% healthy`;
        } else {
            treeStatus.innerText = `Your tree is already pruned`;
        }
    });
});
