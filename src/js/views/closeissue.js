export const closeissue = `<div id="closeissue" class="card hide widget good">
    <div class="card-body">
        <h5 class="card-title">Close Issue</h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="repoForIssueClose">Repository Name</label>
                    <input type="text" class="form-control" id="repoForIssueClose" placeholder="Repository Name....">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="issueNumerToClose">Issue To Close</label>
                    <input type="text" class="form-control" id="issueNumerToClose" placeholder="Specify issue number...">
                </div>
            </div>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-dismiss="modal" id="btnSubmitCloseIssue" data-target="#submitConfirm">Submit</button>
        </form>
    </div>
</div>`;
