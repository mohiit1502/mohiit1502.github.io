export const addcollab = `<div id="addcollab" class="card hide widget good">
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <div class="card-body">
        <h5 class="card-title">Create Collaborator</h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="collaboratorName">Collaborator Name</label>
                    <input type="text" class="form-control" id="collaboratorName" placeholder="Collaborator ID">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="repoForCollab">Repository Name</label>
                    <input type="text" class="form-control" id="repoForCollab" placeholder="Repository To Add collaborator on ....">
                </div>
            </div>
            <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea class="form-control" rows="3" id="comment"></textarea>
            </div>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-dismiss="modal" id="btnSubmitAddCollab" data-target="#submitConfirm">Submit</button>
        </form>
    </div>
</div>`;
