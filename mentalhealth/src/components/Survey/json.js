Survey.StylesManager.applyTheme("defaultV2");

var surveyJSON = {"title":"BECK DEPRESSION INVENTORY",
"description":"Self-Rated Scale that Evaluates Key Symptoms of Depression",
"logoPosition":"right",
"completedHtml":"<h3>Thank you for completing the survey</h3>",
"pages":[{"name":"page1",
"elements":[{"type":"radiogroup","name":"question1","title":"   ","isRequired":true,"choices":[{"value":"Item 1","text":"I don't have any thoughts of killing myself"},{"value":"Item 2","text":"I have thoughts of killing myself, but I would not carry them out"},{"value":"Item 3","text":"I would like to kill myself"},{"value":"Item 4","text":"I would kill myself if I had the chance"}]}
,{"type":"radiogroup","name":"question2","title":"    ","isRequired":true,"choices":[{"value":"Item 1","text":"I don't feel disappointed in myself"},{"value":"Item 2","text":"I am disappointed in myself"},{"value":"Item 3","text":"I am disgusted with myself."},{"value":"Item 4","text":"I hate myself."}]},
{"type":"radiogroup","name":"question3","title":"      ","isRequired":true,"choices":[{"value":"Item 1I can sleep as well as usual.","text":"I can sleep as well as usual."},{"value":"Item 2","text":"I don't sleep as well as I used to."},{"value":"Item 3","text":"  I wake up 1-2 hours earlier than usual and find it hard to get back to sleep."},{"value":"Item 4","text":" I wake up several hours earlier than I used to and cannot get back to sleep."}]}
]}]};

function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
}

ReactDOM.render(<Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));