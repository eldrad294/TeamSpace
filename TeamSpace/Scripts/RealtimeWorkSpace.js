function initializeModel(model) {
    var string = model.createString('');
    model.getRoot().set('text', string);
}

function displayCollaboratorEvent(doc, evt) {
    $('#Collaborators').html('');
    var collaborators = doc.getCollaborators();
    alert(collaborators.length);
    for(var i = 0 ; i<collaborators.length;i++){
        $("#Collaborators").append('<span style="padding-left:2px;" class="glyphicon glyphicon-user"></span>');
    }
        //alert('User ID:'    +user.userId);
   //console.log('Session ID:' +user.sessionId);
   //console.log('Name:'       +user.displayName);
   //console.log('Color:'      +user.color);
}

function onFileLoaded(doc) {
    var string = doc.getModel().getRoot().get('text');
    doc.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED, displayCollaboratorEvent(doc));

    var textArea1 = document.getElementById('editor1');
    gapi.drive.realtime.databinding.bindString(string, textArea1);
    textArea1.disabled = false;
    displayAllCollaborators(doc);
}

/**
 * Options for the Realtime loader.
 */
var realtimeOptions = {
    /**
     * Client ID from the console.
     */
    clientId: '533701018382-61j8o5htb0kl12brtf06g40v5fjhg584.apps.googleusercontent.com',

    /**
     * The ID of the button to click to authorize. Must be a DOM element ID.
     */
    authButtonElementId: 'authorizeButton',

    /**
     * Function to be called when a Realtime model is first created.
     */
    initializeModel: initializeModel,

    /**
     * Autocreate files right after auth automatically.
     */
    autoCreate: true,

    /**
     * The name of newly created Drive files.
     */
    defaultTitle: "New Realtime Quickstart File",

    /**
     * The MIME type of newly created Drive Files. By default the application
     * specific MIME type will be used:
     *     application/vnd.google-apps.drive-sdk.
     */
    newFileMimeType: null, // Using default.

    /**
     * Function to be called every time a Realtime file is loaded.
     */
    onFileLoaded: onFileLoaded,

    /**
     * Function to be called to inityalize custom Collaborative Objects types.
     */
    registerTypes: null, // No action.

    /**
     * Function to be called after authorization and before loading files.
     */
    afterAuth: null // No action.
}
/**
 * Start the Realtime loader with the options.
 */
function startRealtime() {
    var realtimeLoader = new rtclient.RealtimeLoader(realtimeOptions);
    realtimeLoader.start();
}

function displayAllCollaborators(document) {
    var collaborators = document.getCollaborators();
    var collaboratorCount = collaborators.length;
    for (var i = 0; i < collaboratorCount; i++) {
        var user = collaborators[collaboratorCount - 1];
        if (user.isMe)
            $("#Collaboratorname").replaceWith(user.displayName);
    }
}
