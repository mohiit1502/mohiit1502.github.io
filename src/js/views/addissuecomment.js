export const addissuecomment = `<div id="addissuecomment" class="card hide widget good">
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <div class="card-body">
        <h5 class="card-title">Add Comment</h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="repoForIssueComment">Repository Name</label>
                    <input type="text" class="form-control" id="repoForIssueComment" placeholder="Repository Name....">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="issueNumber">Issue Number</label>
                    <input type="text" class="form-control" id="issueNumber" placeholder="Issue To Comment On...">
                </div>
            </div>
            <div class="form-group">
                <label for="issueComment">Comment:</label>
                <textarea class="form-control" rows="3" id="issueComment"></textarea>
            </div>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-dismiss="modal" id="btnSubmitAddComment" data-target="#submitConfirm">Submit</button>
        </form>
    </div>
</div>`;
