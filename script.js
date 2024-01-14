const dashboard = document.getElementsByClassName('dashboard')[0];
console.log(dashboard)

const isMobile = parseInt(getComputedStyle(dashboard).getPropertyValue('mobile-view'));
if (isMobile) {
    dashboard.classList.add('collapsed');
}

// const isMobile = parseInt(this.getStyleProperty('mobile-view'));
// if (isMobile) {
//     dashboard.classList.add('collapsed');
// }