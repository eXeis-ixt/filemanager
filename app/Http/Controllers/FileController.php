<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FileController extends Controller
{
    public function index(){
        return Inertia::render('Manage/Home');
    }
    public function demo(){
        return Inertia::render('File');
    }
}
