const avatar = document.querySelector("#avatar");

const defaultAvatar = "http://placehold.it/300x300";
var userAvatar = "http://www.fillmurray.com/300/300";

avatar.innerHTML = `
<img src="${userAvatar || defaultAvatar}" alt="">
`;
