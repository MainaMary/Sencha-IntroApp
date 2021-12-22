<?php 

namespace App\Controllers;

use App\Models\UserModel;
// use App\Controllers\BaseController;

class Welcome extends BaseController{
    public function index(){
        // $this ->load->model('user_model');
        $userModel = model(UserModel::class);
        // $userModel = new \App\Models\UserModel();

        $u = $userModel->all();
        $data = array();
        $data['users'] = $u;
        return view('welcome_message', $data);
        // echo json_encode($data);
        // echo json_encode('Foo');
    }
}
?>