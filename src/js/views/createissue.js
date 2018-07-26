export const createissue = `<div id="createissue" class="card hide widget good">
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <div class="card-body">
        <h5 class="card-title">Create Issue</h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="issueTitle">Issue Title</label>
                    <input type="text" class="form-control" id="issueTitle" placeholder="Issue title">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="issueRepository">Issue Repository</label>
                    <input type="text" class="form-control" id="issueRepository" placeholder="Issue's Repository here">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="assignees">Assignees</label>
                    <input type="text" class="form-control" id="assignees" placeholder="Comma Separated user IDs...">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="labels">Issue Labels</label>
                    <input type="text" class="form-control" id="labels" placeholder="Comma Separated Labels...">
                </div>
            </div>
            <div class="form-group">
                <label for="description">Issue Description:</label>
                <textarea class="form-control" rows="3" id="description"></textarea>
            </div>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-dismiss="modal" id="btnSubmitConfirm" data-target="#submitConfirm">Submit</button>
        </form>
    </div>
</div>`;
