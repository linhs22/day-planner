$("#currentDay").text(moment().format('dddd, MMMM Do'));
var notesForm = $("button")
var notesInput = $("textarea")

var now = moment()

var id;
var notes = []

init();

$("textarea").each(function(index) {


    var rowid = parseInt(($(this).parent().attr('id')));
    console.log(now.hour())
    console.log(rowid)
    var hour = parseInt(now.hour())
    id = "key" + rowid;
    if (rowid === hour) {
        $(this).attr("class", "description present col-md-10")
    } else if (rowid < (hour)) {
        $(this).attr("class", "description past col-md-10")

    } else if (rowid > (hour)) {
        $(this).attr("class", "description future col-md-10")
    }
    console.log(rowid === (hour));
    $(this).attr("id", `key${rowid}`)
});

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedNotes = JSON.parse(localStorage.getItem(id));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedNotes !== null) {
        notes = storedNotes;
    }
}

function storeNotes() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("notes", JSON.stringify(notes));

}

// When form is submitted...
$(".saveBtn").click(function() {
    event.preventDefault();
    var element = event.target;
    console.log(element)

    // If that element is a button...
    if (element.matches("button") === true) {
        var notesText = notesInput.val().trim();
        console.log("yup")
            // Return from function early if submitted todoText is blank
        if (notesText === "") {
            return;
        }

        // Add new todoText to todos array, clear the input
        notes.push({});
        notesInput.val("");

        // Store updated todos in localStorage, re-render the list
        storeNotes();
    }
});