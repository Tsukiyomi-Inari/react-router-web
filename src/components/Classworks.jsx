import React from "react";
import BlueWindowClass from "./assets/BlueWindowClass";

function Classworks() {
  return (
    <div className="classworks">
      <div className="container">
        <div className="row  my-5 ">
          <div className="col-lg-7 align-self-start">
            <BlueWindowClass />
          </div>
          <div className="col-lg-5 text-center ">
            <h1 className="font-weight-light kat"><span>Classworks</span></h1>
            <br/>
            <div className="accordion accordion-color " id="cWorkAcord">
              <div className="accordion-item" id="classwork1">
              <h6 className="accordion-header" id="headingOne">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1- First App:Android Studio
                </button>
              </h6>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#cWorkAcord">
              <p className="accordion-body">
              <a href="https://github.com/Tsukiyomi-Inari/react-router-web/raw/master/src/components/assets/ClassWork1-Bellman.apk"target="_blank" rel="noreferrer">Download the APK</a>
              <iframe width="400" height="215" src="https://www.youtube.com/embed/KjxjRHhFJD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ul className="reference-group">
              <span><strong>Referenced Resources:</strong></span>
                <li><a href="https://developer.android.com/codelabs/android-training-create-recycler-view#0" target="_blank" rel="noreferrer">Android Studio Training: Create Recycler View</a></li>
                <li className="reference-item"><a href="https://google-developer-training.github.io/android-developer-fundamentals-course-concepts-v2/unit-2-user-experience/lesson-4-user-interaction/4-5-c-recyclerview/4-5-c-recyclerview.html" target="_blank" rel="noreferrer">Google Developer Training - 4.5: RecyclerView</a></li>
                <li><a href="https://developer.android.com/develop/ui/views/components/menus" target="_blank" rel="noreferrer">Android Developer Docs: UI Guide - Menus</a></li>
                <li><a href="https://developer.android.com/reference/androidx/fragment/app/Fragment.html" target="_blank" rel="noreferrer">Android Developer Docs: Reference - Fragments</a></li>
                <li><a href="https://itecnote.com/tecnote/android-radio-button-findviewbyid-within-a-fragment/" target="_blank" rel="noreferrer">Android - Radio Button findViewById within a Fragment</a></li>
                <li><a href="https://github.com/google-developer-training/android-advanced/blob/master/FragmentCommunicate/app/src/main/java/com/example/android/fragmentcommunicate/SimpleFragment.java" target="_blank" rel="noreferrer">Github Repository from google-developer-training : android-advanced </a></li>
                
                </ul>
             
            </p>
            </div>
            </div>

            <div className="accordion-item" >
              <h6 className="accordion-header" id="headingTwo"> <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">2-[comming soon]</button></h6>
              <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#cWorkAcord">
              <p className="accordion-body">Comming soon</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classworks;