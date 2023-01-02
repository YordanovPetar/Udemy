console.log(isLandscapeOrPortrait(600, 800));

function isLandscapeOrPortrait(width, height) {
    return (width > height) ? 'Landscape' : 'Portrait';
}