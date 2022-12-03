function loadCoupon() {
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.7';
}
function closeCoupon() {
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity='1';
}
const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error);
};


navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000,
});

