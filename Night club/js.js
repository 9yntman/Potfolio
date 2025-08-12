var $img = $("img");
$divs.velocity(
{ opacity: 0 },
// Open an alert box right before the animation begins
{
begin: function () { console.log("Begin!"); },
// Open an alert box once the animation completes
complete: function () { console.log("Complete!"); }
}
);
body.velocity({ opacity: 5 }, { visibility: "hidden" });