<?php
namespace App\Models;
use CodeIgniter\Model;


class UserModel extends Model{

    function all(){
        $db = db_connect();

         $users = $this->db->table('users')->get()->getResultArray(); 
         return $users;
    }
}
?>
