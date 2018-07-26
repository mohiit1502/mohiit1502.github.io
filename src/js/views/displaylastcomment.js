export const displaylastcomment = `<div id="displaylastcomment" class="card hide widget good">
    <div class="card-body">
        <h5 class="card-title">Display Last Comment</h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="repoForCommentView">Repository Name</label>
                    <input type="text" class="form-control" id="repoForCommentView" placeholder="Repository Name....">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="issueNumberForCommentView">Issue To Close</label>
                    <input type="text" class="form-control" id="issueNumberForCommentView" placeholder="Specify issue number...">
                </div>
            </div>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-dismiss="modal" id="btnSubmitCommentView" data-target="#submitConfirm">Submit</button>
        </form>
    </div>
</div>`;
